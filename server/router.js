const router = require('express').Router();
const promisify = require('./promisify');

const customersTransactions = require('./transactions/customersTransactions');
const usersTransactions = require('./transactions/usersTransactions');
const sessionTransactions = require('./transactions/sessionTransactions');

router.get('/status', promisify(() => ({ status: 'OK' })));

router.get(
  '/customers/:customerId',
  promisify(customersTransactions.getCustomer),
);

router.post(
  '/users',
  promisify(usersTransactions.createUser),
);

router.post(
  '/session',
  promisify(sessionTransactions.login),
);

module.exports = router;
