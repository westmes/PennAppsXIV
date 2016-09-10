var express = require('express');
var router = express.Router();
var faceAPI = require('../src/faceAPI');

/* GET home page. */
router.get('/', function(req, res, next) {
	faceAPI.postCode();
  	res.render('index', { title: 'Hello' });

});

module.exports = router;