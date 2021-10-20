const express = require('express');
const UserService = require('./../services/users.service');
const router = express.Router();
const service = new UserService();

/* router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    //as they are optional make validation if these values exit or not, these parameters may not have been sent
    res.json({ limit, offset });
  } else {
    res.send('No hay parámetros');
  }
}); */

/* By default: http://localhost:3000/users No hay parámetros
// http://localhost:3000/users?limit=10&offset=200
{
  "limit": "10",
  "offset": "200"
} */

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

/* router.get(
  '/:userId/orders/:orderId/categories/:categoryId/articles/:articleId',
  (req, res) => {
    const { userId, orderId, categoryId, articleId } = req.params;
    res.json({
      user: 'Isabela',
      userId,
      order: 'Order 1',
      orderId,
      categoryId,
      category: 'Living room',
      subcategory: 'Furniture',
      articleId,
      article: 'Table',
    });
  }
);

http://localhost:3000/users/1/orders/2/categories/14/articles/32
{
  "user": "Isabela",
  "userId": "1",
  "order": "Order 1",
  "orderId": "2",
  "categoryId": "14",
  "category": "Living room",
  "subcategory": "Furniture",
  "articleId": "32",
  "article": "Table"
} */

//GET
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const users = service.findOne(userId);
  res.json(users);
});

//POST
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json({
    message: 'created',
    data: newUser,
  });
});

//PATCH Update product partially
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedUser = service.update(id, body);
  res.json({
    message: 'updated',
    data: updatedUser,
    id,
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedUser = service.delete(id);
  res.json({
    message: 'deleted',
    deletedUser,
  });
});

module.exports = router;
