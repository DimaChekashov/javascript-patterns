//Example 1
class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

//Example 2
class Singleton {
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

//Example 3 (oldly)
const singleton = (function() {
  let instance;

  function createInstance() {
    return {};
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }
})();


//Example 4 ( example 3 with class)
const Singleton = (function() {
  let instance;

  return class {
    constructor() {
      if (!instance) {
        instance = this;
      }

      return instance;
    }
  }
})();
