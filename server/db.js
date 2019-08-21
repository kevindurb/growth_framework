const { Pool } = require('pg');

const pool = new Pool();

const getClient = async () => {
  return pool.connect();
}

const getSingle = (result) => result.rows[0];

module.exports = {
  getClient,
  getSingle,
};
