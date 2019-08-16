const router = require('express').Router();

router.get('/status', (req, res) => {
  res.end('OK');
});

router.get(
  '/customers/:customerId',
  require('./transactions/customersTransactions').getCustomer,
);

module.exports = router;
