var request = require('request');

function queryMissingList(cb) {
	  var options = {
	    url: 'https://api.projectoxford.ai/face/v1.0/facelists/missperson',
	    method: "GET",
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

module.exports.queryMissingList = queryMissingList;