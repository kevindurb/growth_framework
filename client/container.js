import { CustomersService } from '/services/CustomersService.js';
import { RouterService } from '/services/RouterService.js';

export const buildContainer = () => ({
  customersService: new CustomersService(),
  routerService: new RouterService(),
});
