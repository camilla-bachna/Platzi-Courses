const express = require('express');

const ProductService = require('./../services/product.service');

const router = express.Router();
//create instance of product service since ProductService is a class
const service = new ProductService();

//response in JSON format
router.get('/', (req, res) => {
  const products = service.find();
  /* //before app.get('/products', ...)
  const products = [];
  const { size } = req.query;
  const limit = size || 10; //generate 10 products if nothing is sent
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      companyName: faker.company.companyName(),
      price: parseInt(faker.commerce.price(), 10), //The parameters retrieved from query, come as a string => parseInt
      imageUrl: faker.image.imageUrl(),
    });
  } */
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

/* http://localhost:3000/products/filter

Soy un filter */

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

/* old code
router.get('/:id', (req, res) => {
  //I will pick up the id you are sending me and add it to the answer
  //id because thats how we added it /:id
  const id = req.params.id;
  //ES6 const {id} = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found',
    });
  } else {
    res.status(200).json({
      //by default status 200, but good to specify
      id,
      name: 'Product 2',
      price: 2000,
    });
  }
}); */

/*router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

http://localhost:3000/products/filter

{
  "id": "filter",
  "name": "Product 2",
  "price": 2000
}

A common error:
Specific endpoints must be declared before dynamic endpoints. */

//POST
router.post('/', (req, res) => {
  //in body we receive parameters
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

//PATCH Update product partially
router.patch('/:id', (req, res) => {
  //instead of patch we can use put
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  //send id so product can be eliminated
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
