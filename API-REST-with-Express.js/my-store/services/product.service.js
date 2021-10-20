const faker = require('faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        companyName: faker.company.companyName(),
        price: parseInt(faker.commerce.price(), 10), //The parameters retrieved from query, come as a string => parseInt
        imageUrl: faker.image.imageUrl(),
      });
    }
  }

  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    //find id in array products
    return this.products.find((product) => product.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductService;
