var router = require('express').Router();

router.use('/admin', require('./admin'));

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
