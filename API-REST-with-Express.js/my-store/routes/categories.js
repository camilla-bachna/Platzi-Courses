const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      category: 'Living room',
      subcategory: 'Lightning',
      article: 'Lamp',
    },
    {
      category: 'Living room',
      subcategory: 'Furniture',
      article: 'Table',
    },
    {
      category: 'Living room',
      subcategory: 'Rugs',
      article: 'Beige rug',
    },
    {
      category: 'Living room',
      subcategory: 'Decoration',
      article: 'Vase',
    },
  ]);
});

router.get('/:categoryId/article/:articleId', (req, res) => {
  const { categoryId } = req.params;
  const { articleId } = req.params;
  res.json({
    categoryId,
    category: 'Living room',
    subcategory: 'Furniture',
    articleId,
    article: 'Table',
  });
});

/* http://localhost:3000/categories/12/article/22
{
  "categoryId": "12",
  "category": "Living room",
  "subcategory": "Furniture",
  "articleId": "22",
  "article": "Table"
} */

module.exports = router;
