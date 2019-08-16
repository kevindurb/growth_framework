import { observable, decorate, action, computed } from '/mobx.js';
import { executeRequest } from '/api.js';
import { getCustomer } from '/apis/customersApis.js';

export class CustomersService {
  customers = {};
  async fetchCustomer(id) {
    const customer = await executeRequest(getCustomer(id));
    this.customers[customer.id] = customer;
  }

  getCustomer(id) {
    if (!this.customers[id]) {
      return this.fetchCustomer(id);
    }
    return this.customers[id];
  }
}

decorate(CustomersService, {
  customers: observable,
  fetchCustomer: action,
});
