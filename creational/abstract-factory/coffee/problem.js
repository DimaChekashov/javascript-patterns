const Coffee = require('./coffee');
const Tea = require('./tea');

class DrinkFactory {
  static createDrink(type1, type2) {
    switch (type1) {
      case 'coffee':
        switch (type2) {
          case 'espress': return new Espress();
          case 'americano': return new Americano();
        }
      case 'tea':
        switch (type2) {
          case '': return
        }
    }
  }
}

module.exports = DrinkFactory;