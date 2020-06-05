import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();  

const pointsController = new PointsController();
const itemsController = new ItemsController();

// listar itens
routes.get('/items', itemsController.index);

// criar pontos de coleta
routes.post('/points', pointsController.create);

// listar pontos específicos filtrados por campos - Query: (?city=...&uf=..&items=number)
routes.get('/points', pointsController.index);

// listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes;