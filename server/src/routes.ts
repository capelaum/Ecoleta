import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer'

//import knex from './database/connection';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();  
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// listar itens
routes.get('/items', itemsController.index);

// criar ponto de coleta
routes.post(
  '/points', 
  upload.single('image'), 
  // Pode ser feito em um arquivo separado
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),  // veificar tamanho
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required() // regex para vericar q tem numeros separado p/ virgulas apenas
    })
  }, {
    abortEarly: false 
  }), 
  pointsController.create
);

// listar pontos específicos filtrados por Query: (?city=...&uf=..&items=number[])
routes.get('/points', pointsController.index);

// listar ponto de coleta específico
routes.get('/points/:id', pointsController.show);

export default routes;