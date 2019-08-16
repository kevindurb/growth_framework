const bcrypt = require('bcrypt');
const usersGateway = require('../gateways/usersGateway');

const SALT_ROUNDS = 10;

module.exports = {
  async createUser(request) {
    const {
      password,
      email,
      customerId,
    } = request.body;

    const hash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = {
      name: '',
      email,
      hash,
      customerId,
    };
    return usersGateway.createUser(user);
  },
};
