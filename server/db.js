const { Client } = require('pg');

let client;

const getClient = () => {
  if (!client) {
    client = new Client();
    await client.connect();
  }

  return client;
}

module.exports = {
  getClient,
};
