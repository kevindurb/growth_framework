const customersGateway = require('../gateways/customersGateway');
const customerSerializer = require('../serializers/customerSerializer');

module.exports = {
  getCustomer(request) {
    return customersGateway.getById(request.params.customerId)
      .then(customerSerializer);
  },
  createCustomer(request) {
    const data = {
      email: request.body.email,
    };
    return customersGateway.create(data)
      .then(customerSerializer);
  }
};
