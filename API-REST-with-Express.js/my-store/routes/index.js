const express = require('express');
const router = express.Router();

const productsRouter = require('./products');
const usersRouter = require('./users');
const categoriesRouter = require('./categories');

function routerApi(app) {
  //create global path for all endpoints
  app.use('/api/v1', router);
  //now I can use this path and don't have to add /api/v1 in all endpoints
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

  /*another version: to add /api/v1 in each endpoint
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/categories', categoriesRouter); */
}

module.exports = routerApi;
