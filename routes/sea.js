/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('sea', { title: 'Search Results sea' });
});

module.exports = router;*/

var express = require('express');
const sea_controlers= require('../controllers/sea');
var router = express.Router();
/* GET seas */
router.get('/', sea_controlers.sea_view_all_Page );
module.exports = router;