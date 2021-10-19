const express = require('express');
const faker = require('faker');

const router = express.Router();

//response in JSON format
router.get('/', (req, res) => {
  //before app.get('/products', ...)
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
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

/* http://localhost:3000/products/filter

Soy un filter */

router.get('/:id', (req, res) => {
  //I will pick up the id you are sending me and add it to the answer
  //id because thats how we added it /:id
  const id = req.params.id;
  //ES6 const {id} = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

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

router.post('/', (req, res) => {
  //in body we receive parameters
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
