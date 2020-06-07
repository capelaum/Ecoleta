import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    //SELECT * FROM items
    const items = await knex('items').select('*'); 
  
    const serializedItems = items.map(item => {
      return { 
        id: item.id,
        name: item.title,
        image_url: `http://192.168.100.102:3333/uploads/${item.image}`, // trocar para pegar as imagens do modo mobile
      };
    });
  
    return response.json(serializedItems)
  }
}

export default ItemsController;