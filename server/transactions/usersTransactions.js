const bcrypt = require('bcrypt');
const usersGateway = require('../gateways/usersGateway');
const userSerializer = require('../serializers/userSerializer');
const BadRequest = require('../errors/BadRequest');

const SALT_ROUNDS = 10;

module.exports = {
  async createUser(request) {
    const {
      password,
      email,
      customerId,
    } = request.body;

    const currentUser = await usersGateway.getUserById(request.session.user.id);

    if (currentUser.customerId !== customerId || !currentUser.admin) {
      throw new BadRequest('You are not allowed to do this');
    }

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
  async getAllUsers(request) {
    const currentUser = await usersGateway.getUserById(request.session.user.id);
    const users = await usersGateway.getUsersForCustomer(currentUser.customerId);
    return users.map(userSerializer);
  }
};
