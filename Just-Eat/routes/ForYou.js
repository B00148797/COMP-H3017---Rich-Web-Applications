var express = require('express');
var router = express.Router();

/* GET ForYou page. */
router.get('/', function(req, res, next) {
  res.render('ForYou', { title: 'Express' });
});

module.exports = router;