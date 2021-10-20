const express = require('express');
const router = express.Router();

const CategoriesService = require('./../services/categories.service');
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
  /* res.json([
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
  ]); */
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const category = service.findOne(id);
  if (!category) {
    res.status(404).json({
      message: `La categoria con ${id} no existe`,
    });
  } else {
    res.status(200).json(category);
  }
});

/* router.get('/:id/article', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    category: 'Living room',
    subcategory: 'Furniture',
    articleId,
    article: 'Table',
  });
});

http://localhost:3000/categories/12/article/22
{
  "categoryId": "12",
  "category": "Living room",
  "subcategory": "Furniture",
  "articleId": "22",
  "article": "Table"
} */

//POST
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

//PATCH Update product partially
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedCategory = service.update(id, body);
  res.json({
    message: 'updated',
    data: updatedCategory,
    id,
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedCategory = service.delete(id);
  res.json({
    message: 'deleted',
    deletedCategory,
  });
});

module.exports = router;
