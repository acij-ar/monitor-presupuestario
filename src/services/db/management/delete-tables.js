const db = require('../index');

module.exports = () => {
  db.prepare('DROP TABLE IF EXISTS relaciones').run();
  db.prepare('DROP TABLE IF EXISTS presupuestos').run();
  db.prepare('DROP TABLE IF EXISTS entidades').run();
};
