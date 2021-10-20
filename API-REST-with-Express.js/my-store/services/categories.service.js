const faker = require('faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 40;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        category: faker.commerce.department(),
        article: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10) + '$',
      });
    }
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((category) => category.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new Error('Categoria no encontrado');
    }
    const category = this.categories[index];
    this.categories[index] = { ...category, ...changes };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) {
      throw new Error('Categoria no encontrado');
    }
    this.categories.splice(index, 1);
    return id;
  }
}

module.exports = CategoriesService;
