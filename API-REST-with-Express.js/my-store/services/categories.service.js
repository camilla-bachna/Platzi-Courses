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

  create() {}

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((category) => category.id === id);
  }

  update() {}

  delete() {}
}

module.exports = CategoriesService;
