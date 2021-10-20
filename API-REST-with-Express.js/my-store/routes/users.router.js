const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    //as they are optional make validation if these values exit or not, these parameters may not have been sent
    res.json({ limit, offset });
  } else {
    res.send('No hay parámetros');
  }
});

/* By default: http://localhost:3000/users No hay parámetros
// http://localhost:3000/users?limit=10&offset=200
{
  "limit": "10",
  "offset": "200"
} */

router.get(
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

/* http://localhost:3000/users/1/orders/2/categories/14/articles/32
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

module.exports = router;
