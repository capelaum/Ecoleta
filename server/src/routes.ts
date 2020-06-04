import express from 'express';
import knex from './database/connection';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();  

const pointsController = new PointsController();
const itemsController = new ItemsController();

//* index, show, create, update, delete
// listar itens
routes.get('/items', itemsController.index);

// criar pontos de coleta
routes.post('/points', pointsController.create);

// listar pontos específicos
routes.get('/points', pointsController.index);

// listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes;