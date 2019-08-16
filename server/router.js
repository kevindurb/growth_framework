const router = require('express').Router();
const promisify = require('./promisify');

router.get('/status', (req, res) => {
  res.end('OK');
});

router.get(
  '/customers/:customerId',
  promisify(require('./transactions/customersTransactions').getCustomer),
);

router.post(
  '/users',
  promisify(require('./transactions/usersTransactions').createUser),
);

router.post(
  '/session',
  promisify(require('./transactions/sessionTransactions').login),
);

module.exports = router;
