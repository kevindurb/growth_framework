const db = require('../db');

module.exports = {
  async getById(id) {
    const client = await db.getClient();
    return client.query('SELECT * FROM customers WHERE id = $1', [id])
      .then(db.getSingle);
  },
  async create(data) {
    const client = await db.getClient();
    const sql = `
      INSERT INTO customers (email)
      VALUES ($1)
      RETURNING id, email, name
    `;
    return client.query(sql, [
      data.email
    ]).then(db.getSingle);
  }
};
