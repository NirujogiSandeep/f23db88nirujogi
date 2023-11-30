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
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
/* GET seas */
router.get('/', sea_controlers.sea_view_all_Page );

/* GET detail sea page */
router.get('/detail',secured, sea_controlers.sea_view_one_Page);
/* GET create sea page */
router.get('/create',secured, sea_controlers.sea_create_Page);
/* GET create update page */
router.get('/update', secured,sea_controlers.sea_update_Page);

/* GET delete sea page */
router.get('/delete',secured, sea_controlers.sea_delete_Page);
module.exports = router;