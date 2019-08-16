const db = require('../db');

module.exports = {
  async getById(id) {
    const client = await db.getClient();
    const result = await client.query('SELECT * FROM customers WHERE id = $1', [id]);
    console.log(result);
  }
};
