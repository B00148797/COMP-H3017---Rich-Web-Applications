var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('Login', { title: 'Express' });
});

module.exports = router;