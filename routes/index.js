var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    title:'Favorite Albums',
    subtitle:'A List of My All-Time Favorites:'
  });
});
router.get('/edit_albums', function(req, res, next) {
  res.render('edit_albums');
});

module.exports = router;
