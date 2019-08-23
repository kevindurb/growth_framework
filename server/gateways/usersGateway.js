const db = require('../db');

module.exports = {
  async createUser(user) {
    const client = await db.getClient();
    const sql = `
      INSERT INTO users (name, email, hash, customer_id)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, name
    `;
    return client.query(sql, [
      user.name,
      user.email,
      user.hash,
      user.customerId
    ]).then(db.getSingle);
  },
  async getUserByEmail(email) {
    const client = await db.getClient();
    const sql = `
      SELECT *
      FROM users
      WHERE email = $1
      LIMIT 1
    `;
    return client.query(sql, [email]).then(db.getSingle);
  },
  async getUserById(id) {
    const client = await db.getClient();
    const sql = `
      SELECT *
      FROM users
      WHERE id = $1
      LIMIT 1
    `;
    return client.query(sql, [id]).then(db.getSingle);
  },
  async getUsersForCustomer(customerId) {
    const client = await db.getClient();
    const sql = `
      SELECT *
      FROM users
      WHERE customer_id = $1
    `;
    return client.query(sql, [customerId]).then(db.getAll);
  }
};
