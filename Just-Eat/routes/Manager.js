var express = require('express');
var router = express.Router();

/* GET Manager page. */
router.get('/', function(req, res, next) {
  res.render('Manager', { title: 'Express' });
});

module.exports = router;