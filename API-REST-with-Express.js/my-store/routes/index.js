const express = require('express');
const router = express.Router();

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

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
