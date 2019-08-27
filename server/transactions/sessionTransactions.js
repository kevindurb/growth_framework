const bcrypt = require('bcrypt');
const usersGateway = require('../gateways/usersGateway');
const BadRequest = require('../errors/BadRequest');
const userSerializer = require('../serializers/userSerializer');

module.exports = {
  async login(request) {
    const {
      email,
      password,
    } = request.body;

    const user = await usersGateway.getUserByEmail(email);

    if (!user) {
      throw new BadRequest('Email or password invalid.');
    }

    const matches = await bcrypt.compare(password, user.hash.toString());

    if (!matches) {
      throw new BadRequest('Email or password invalid.');
    }

    const serialized = userSerializer(user);
    request.session.user = serialized;

    return serialized;
  },
  async getMe(request) {
    return userSerializer(await usersGateway.getUserById(request.session.user.id));
  },
  logout(request) {
    request.session.destroy();
  }
};
