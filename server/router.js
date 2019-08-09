const router = require('express').Router();

router.get('/api/status', (req, res) => {
  res.end('OK');
});

module.exports = router;
