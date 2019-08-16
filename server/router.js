const router = require('express').Router();
const promisify = require('./promisify');

router.get('/status', (req, res) => {
  res.end('OK');
});

router.get(
  '/customers/:customerId',
  promisify(require('./transactions/customersTransactions').getCustomer),
);

module.exports = router;
