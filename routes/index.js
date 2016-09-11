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

	const authURL = picasa.getAuthURL(config);
	res.redirect(authURL);
	// faceAPI.postCode();
});


/* redirect to the next page*/
router.get('/findface', function(req, res, next) {
	res.send("find face");
	var url = req.url;
	var code = url.substring(15, url.length);
	picasa.getAccessToken(config, code, (error, accessToken) => {
  		// console.log(error, accessToken)
  		picasa.getPhotos(accessToken, null, (error, photos) => {
        var i = 0;
        result.findMatchesInPhotos(photos, function(map) {
            console.log("in js")
            // console.log(map);
            if (map && i == 0) {
                // console.log(map)
                sql.query(map, function(res, err){
                    console.log(res);
                })
            }
            i++;
        });
  			// console.log(error, photos[0].content.src);
        // missingList.queryMissingList(function(res) {
        //     // console.log(JSON.stringify(res));
        //     var list = JSON.parse(res);
        //     var arr = list["persistedFaces"];
        //     for (var i=0; i<arr.length; i++) {
        //       var term = arr[i];
        //       pid = term["persistedFaceId"];
              
        //     }

            // var photoURL = [];
            // for (var i in photos) {
            //   // console.log(photos[i].content.src);
            //   // photoURL.push(photos[i].content.src);

            //   findMatches(photos[i].content.src);
            // }
        // })
        // for (var i in photos) {
        //   // console.log(photos[i].content.src);
        //   findMatches(photos[i].content.src, myMap);
        // }

  			// console.log(JSON.stringify(photoURL));
		})
  	})

});



module.exports = router;