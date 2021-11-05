var express = require('express');
var router = express.Router();

/* GET Cook page. */
router.get('/', function(req, res, next) {
  res.render('Cook', { title: 'Express' });
});

module.exports = router;