var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sea_controller = require('../controllers/sea');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// sea ROUTES ///
// POST request for creating a sea.
router.post('/sea', sea_controller.sea_create_post);
// DELETE request to delete sea.
router.delete('/sea/:id', sea_controller.sea_delete);
// PUT request to update sea.
router.put('/sea/:id', sea_controller.sea_update_put);
// GET request for one sea.
router.get('/sea/:id', sea_controller.sea_detail);
// GET request for list of all sea items.
router.get('/sea', sea_controller.sea_list);
module.exports = router;