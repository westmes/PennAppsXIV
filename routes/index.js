var express = require('express');
var router = express.Router();

const Picasa = require('picasa') 
const picasa = new Picasa()
const config = {
  "clientId"     : "1014001025339-hbn4gh8b34v4bocvaedvhino8i08c4v8.apps.googleusercontent.com",
  "redirectURI" : "http://localhost:3000/findface",
  "clientSecret" : "Qv8pT3074xAMdymOGvBA8Qj6"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const authURL = picasa.getAuthURL(config)
  res.redirect(authURL)
});


/* redirect to the next page*/
router.get('/findface', function(req, res, next) {
	res.send("find face");
	var url = req.url;
	var code = url.substring(15, url.length);
	picasa.getAccessToken(config, code, (error, accessToken) => {
  		console.log(error, accessToken)
  		picasa.getPhotos(accessToken, null, (error, photos) => {
  			console.log(error, photos[0].content.src);
  			var photoURL = [];
  			for (var i in photos) {
  				console.log(photos[i].content.src);
  				photoURL.push(photos[i].content.src);
  			}
  			//console.log(JSON.stringfy(photoURL));
		})
  	})
});

module.exports = router;