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

/* GET detail sea page */
router.get('/detail', sea_controlers.sea_view_one_Page);
/* GET create sea page */
router.get('/create', sea_controlers.sea_create_Page);
/* GET create update page */
router.get('/update', sea_controlers.sea_update_Page);

/* GET delete sea page */
router.get('/delete', sea_controlers.sea_delete_Page);
module.exports = router;