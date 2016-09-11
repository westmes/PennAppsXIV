var request = require('request');

var querystring = require('querystring');
var http = require('http');

function postCode() {
  // Build the post string from an object
  var post_data = {
  	"url":"https://lh3.googleusercontent.com/eTNmeMXv_73s57AvW-MQ8XnBr8anTwnxu6NBsIaq4onOhNAJgTot3-ZMTev-nNAxHhLdemvEA6GR6bGmH4LfOHbwWZcSyI3lvxmOO7ehOb5ILwe9BRms6FVqiHuNztkjkywCRrVz3qUS2_53p9qLqMf9km5es8QXeKOSfYk416C2968P1gtoY4i_BaOAQjAvpRaKzXG3_zVGfhJtfTvYIh9sgTsuz-yiIg-WNH2XY2aGwSNm9_aKbEpis8g4MizY-4uaBFqmf83XjtRAjTLDrU0JrUWwieWO4SOFiCk1wvaxRDtMiv5jT5CB3UndRl3Nxp3Ibuv_05ODqHQShxtV104F-45CABJE97Vr1owhiyM9olkxe-1JPmywbqizsQiIZSO1KD9wRwHyJaeBKp-OAT3gWe7d5Hj1qB7LOILqwcHMhkTvjeybDQOKMJdmX2_T9RXhythEd6PsscAmoLVdnKUMmCoBnZvyqGRfGf3nOQwxQ_7U5x6LuSGb-40US5GgcV3a4gNi_y-nB1olgzUKdWErsV7VkoJLQF8VneopYr4sUvbQ7I5O2oPJ3EQHKmDlvkd4Y27yLc0OkZkMQYG2AHiiVSNhwDz6N6hj2OneqACBj7Y=w1156-h1540-no"
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
	request(
		options,
    	function (error, response, body) {
    		// console.log(error);
    		console.log(response.statusCode);
        	if (!error && response.statusCode == 200) {
            	// console.log(body)
        	}
    	}
	);

}

module.exports.postCode = postCode;