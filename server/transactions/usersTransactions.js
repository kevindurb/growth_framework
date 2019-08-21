const bcrypt = require('bcrypt');
const usersGateway = require('../gateways/usersGateway');
const userSerializer = require('../serializers/userSerializer');

const SALT_ROUNDS = 10;

module.exports = {
  async createUser(request) {
    const {
      password,
      email,
      customerId,
    } = request.body;

    const hash = await bcrypt.hash(password, SALT_ROUNDS);

    const data = {
      name: '',
      email,
      hash,
      customerId,
    };

    const user = await usersGateway.createUser(data);

    return userSerializer(user);
  },
};
