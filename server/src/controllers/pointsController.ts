import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {

  //* Lista pontos de coleta filtrados
  async index(request: Request, response: Response) {
    const {city, uf, items} = request.query;

    // transforma string items em numbers[]
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    //* busca a cidade e uf dos pontos através da id dos itens
    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    const serializedPoints = points.map(point => {
      return { 
        ...point,
        image_url: `http://192.168.100.102:3333/uploads/${point.image}`, 
      };
    });

    return response.json(serializedPoints);
  }

  //* Mostra ponto de coleta específico
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('points').where('id', id).first();

    if(!point) {
      return response.status(400).json({ message: 'Point not found' });
    }

    // SQL QUERY
    // JOIN point_items ON items_id = point_items.item_id
    // WHERE point_items.point_id = {id}

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.100.102:3333/uploads/${point.image}`, 
    };

    //* lista o nome dos itens que estão relacionados ao ponto de coleta buscado
    const items = await knex('items')
    .join('point_items', 'items.id', '=', 'point_items.item_id')
    .where('point_items.point_id', id)
    .select('items.title');

    // console.log(items);

    return response.json({ point: serializedPoint, items }); 
  }

  //* Cria um novo ponto de coleta
  async create(request: Request, response: Response) {
    // pega dados do body
    const {
      name, email, whatsapp, latitude, longitude, city, uf, items
    } = request.body; 
  
    // knex transaction: se uma query der ruim a outra tbm não executa
    const trx = await knex.transaction(); 

    const point = {
      image: request.file.filename, 
      name, email, whatsapp, latitude, longitude, city, uf
    }
  
    const insertedIds = await trx('points').insert(point);
    const point_id = insertedIds[0];
  
    // tratando items
    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id,
        };
      });

    // tabela pivot
    await trx('point_items').insert(pointItems);
    
    await trx.commit(); //* fazer as inserções com transactions!

    return response.json({ 
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;