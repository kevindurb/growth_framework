const router = require('express').Router();
const promisify = require('./promisify');
const validateRequest = require('./validateRequest');

const customersTransactions = require('./transactions/customersTransactions');
const usersTransactions = require('./transactions/usersTransactions');
const sessionTransactions = require('./transactions/sessionTransactions');

const loginRequestValidator = require('./validators/loginRequestValidator');
const loggedInValidator = require('./validators/loggedInValidator');
const createCustomerValidator = require('./validators/createCustomerValidator');

router.get('/status', promisify(() => ({ status: 'OK' })));

router.get(
  '/customers/:customerId',
  promisify(
    validateRequest(loggedInValidator),
    customersTransactions.getCustomer
  ),
);

router.post(
  '/customers',
  promisify(
    validateRequest(createCustomerValidator),
    customersTransactions.createCustomer
  ),
);

router.post(
  '/users',
  promisify(
    validateRequest(loggedInValidator),
    usersTransactions.createUser
  ),
);

router.get(
  '/users',
  promisify(
    validateRequest(loggedInValidator),
    usersTransactions.getAllUsers
  ),
);

router.get(
  '/me',
  promisify(
    validateRequest(loggedInValidator),
    sessionTransactions.getMe,
  )
);

router.post(
  '/session',
  promisify(
    validateRequest(loginRequestValidator),
    sessionTransactions.login,
  ),
);

module.exports = router;
