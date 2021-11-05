var express = require('express');
var router = express.Router();

/* GET Customer page. */
router.get('/', function(req, res, next) {
  res.render('Customer', { title: 'Express' });
});

module.exports = router;