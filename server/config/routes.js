const controller = require('../controllers/controllers.js');
const router = require('express').Router();

module.exports = router
    .get('/sample', controller.sampleMethod)
    .get('/search/:query', controller.search)
    .get('/show/:id', controller.getShowDetails)
;
