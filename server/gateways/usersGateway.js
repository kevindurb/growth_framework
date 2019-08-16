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
  }
};
