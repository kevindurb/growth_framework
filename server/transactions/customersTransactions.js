const customersGateway = require('../gateways/customersGateway');

module.exports = {
  getCustomer(request) {
    return customersGateway.getById(request.params.customerId);
  }
};
