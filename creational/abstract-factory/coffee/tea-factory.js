class TeaFactory{
  createDrink(type) {
    switch (type) {
      case 'black': return new Black();
      case 'green': return new Green();
      case 'herbal': return new HerbalTea();
    }
  }
}

module.exports = TeaFactory;