var express = require('express');
var router = express.Router();
var faceAPI = require('../src/faceAPI');
// var missingList = require('../src/queryMissingList');
var findMissing = require('../src/findMissing');
var result = require('../src/result');
var sql = require('../sql');

const Picasa = require('picasa') ;
const picasa = new Picasa();
const config = {
  "clientId"     : "1014001025339-hbn4gh8b34v4bocvaedvhino8i08c4v8.apps.googleusercontent.com",
  "redirectURI" : "http://localhost:3000/findface",
  "clientSecret" : "Qv8pT3074xAMdymOGvBA8Qj6"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'frontpage'});
});

router.post('/getauth', function(req, res, next){
  const authURL = picasa.getAuthURL(config);
  res.redirect(authURL);
})


/* redirect to the next page*/
router.get('/findface', function(req, res, next) {
	var url = req.url;
	var code = url.substring(15, url.length);
	picasa.getAccessToken(config, code, (error, accessToken) => {
  		picasa.getPhotos(accessToken, null, (error, photos) => {
        var i = 0;
        var arr = [];
        result.findMatchesInPhotos(photos, function(map) {
            console.log("in js")
            if (map && i == 0) {
                sql.query(map, function(ans, err){
                    console.log(ans);
                    console.log("+++++++++++++++++++++");
                    arr.push(ans);
                })
            }
            i++;
        });
	        setTimeout(function() {
	        	console.log("%%%%%%%%%%%%%%");
	        	console.log(arr);
	        	res.render('facefound', {results: arr})
	        }, 15000);
		})
  	})

});

module.exports = router;