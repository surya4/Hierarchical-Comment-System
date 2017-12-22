let express = require('express');
let router = express.Router();

// mysql constollers
let homeController = require('../controllers/index');

// index home page
router.get('/', homeController.index_get);

module.exports = router;