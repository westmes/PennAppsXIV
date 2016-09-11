var request = require('request');

function findMissing(fid, cb) {

	var body = {
		faceId: fid,
		faceListId: 'missperson'
	}

	var options = {
	url: 'https://api.projectoxford.ai/face/v1.0/findsimilars',
	method: "POST",
	json: true,
	headers: {
	  'Ocp-Apim-Subscription-Key': 'fdcaf7d5d4dc4041b66c2fd12e01be78'
	},
	body: body
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

module.exports.findMissing = findMissing;