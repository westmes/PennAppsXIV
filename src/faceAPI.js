var request = require('request');

var querystring = require('querystring');
var http = require('http');

function postCode(url, cb) {
  // Build the post string from an object
  var post_data = {
  	"url": url
  };

  var options = {
    url: 'https://api.projectoxford.ai/face/v1.0/detect',
    method: "POST",
    json: true,
    body: post_data,
    headers: {
      'Ocp-Apim-Subscription-Key': 'fdcaf7d5d4dc4041b66c2fd12e01be78'
    }
  };
  // An object of options to indicate where to post to
	request (
		options,
    	function (error, response, body) {
    		// console.log(error);
    		// console.log(response.statusCode);
        	if (!error && response.statusCode == 200) {
            // console.log(body)
            return cb(body);

        	}
    	}
	);

}

module.exports.postCode = postCode;