const faker = require('faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 80;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        userName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userId: faker.datatype.uuid(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
      });
    }
  }

  async create(data) {
    const newUser = {
      userId: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(userId) {
    return this.users.find((user) => user.userId === userId);
  }

  update(userId, changes) {
    const index = this.users.findIndex((user) => user.userId === userId);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    const user = this.users[index];
    this.users[index] = { ...user, ...changes };
    return this.users[index];
  }

  delete(userId) {
    const index = this.users.findIndex((user) => user.userId === userId);
    if (index === -1) {
      throw new Error('Usuario no encontrado');
    }
    this.users.splice(index, 1);
    return userId;
  }
}

module.exports = UserService;
