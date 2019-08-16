const { Client } = require('pg');

let client;

const getClient = async () => {
  if (!client) {
    client = new Client();
  }

  await client.connect();

  return client;
}

const getSingle = (result) => result.rows[0];

module.exports = {
  getClient,
  getSingle,
};
