const router = require('express').Router();

router.get('/customers', require('./services').getCustomers)

module.exports = router;
