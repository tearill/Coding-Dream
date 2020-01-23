var express = require('express');
var router = express.Router();

// 请求主页
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

module.exports = router;
