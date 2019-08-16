import { CustomersService } from '/services/CustomersService.js';

export const buildContainer = () => ({
  customersService: new CustomersService(),
});
