const Database = require('./database');

(async () => {
  console.time('1st instance');
  const connection1 = await Database.getInstance();
  console.timeEnd('1st instance');

  console.time('2st instance');
  const connection2 = await Database.getInstance();
  console.timeEnd('2st instance');

  console.log(connection1 === connection2);

  Database.close();
})();