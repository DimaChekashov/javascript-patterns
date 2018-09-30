const Coffee = require('./coffee');
const Tea = require('./tea');
const Juice = require('./juice');

class DrinkFactory {
  static createDrink(type, ...args) {
    switch (type) {
      case 'coffee':
        return new Coffee(...args);
      case 'tea':
        return new Tea(...args);
      case 'juice':
        return new Juice(...args);
    }
  }
}

module.exports = DrinkFactory;