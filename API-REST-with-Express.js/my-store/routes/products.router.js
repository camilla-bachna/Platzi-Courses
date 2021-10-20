const express = require('express');

const ProductService = require('./../services/product.service');

const router = express.Router();
//create instance of product service since ProductService is a class
const service = new ProductService();

//response in JSON format
router.get('/', async (req, res) => {
  const products = await service.find();
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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  //since this returns a promise we have to add await
  const product = await service.findOne(id);
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
router.post('/', async (req, res) => {
  //in body we receive parameters
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

//PATCH Update product partially
router.patch('/:id', async (req, res) => {
  try {
    //instead of patch we can use put
    const { id } = req.params;
    const body = req.body;
    const updatedProduct = await service.update(id, body);
    res.json({
      message: 'updated',
      data: updatedProduct,
      id,
    });
  } catch (error) {
    //message: error.message because in product.service.js throw new Error
    res.status(404).json({ message: error.message });
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    //send id so product can be eliminated
    const deletedProduct = await service.delete(id);
    res.json({
      message: 'deleted',
      deletedProduct,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
