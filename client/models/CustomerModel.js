import { observable, decorate } from '/mobx.js';

export class CustomerModel {
  id = null
  name = ''
}

decorate(CustomerModel, {
  name: observable,
});
