var map = new Map();
var key1 = 'https://lh3.googleusercontent.com/OgH5COQg2XtBHX7osb6Cz4S47Cyut4tWzonRpcng0lpC8YyBbzGjb76IAW1BTjy6pCNOMA03LVgAlDXUkCo7k0mQxZOFOuZy-VA3v9Se4O2F_m_TCZMyW13CioClrzKn9ye-lTfg8iwopmyAu43cnvfvm4HK4-YugGfgvQ3gVFtyUwNNCIr-8psHkNusQqudzS4Ky6lfcTtFrq19lAHHttKsQj6WUgkfJDFcPHIoxCXrooGQwz93ZN4FE7vs_GtWsgnvLWwUinqw2e3h93UYrpjmIcPKzYxsZ1zaRccO0J9UqSphIVDuFwuNPZsrEWjw_rioqP4VQhxGEPWmACRWi1puUQEu7X-IZxpjA4kfQMUGS4vDI9ZfxQ28ACSwZZxit7oX5ZRnuFoAKh8pgS9WPcAOwh40dM8ETr2y-GnwZ2rl6XcdskVWhkgav81Tnd-pX2ig8bYGhnkjqYxGleoNtEfdw__JkB17Vr6ZkjnNKLLzMYq00QPFonSkZRWc5ILj00wdz4yWoseQHUiZbdvLpuotFwnVIOyBw4S8cT_ntJVF456lyZUCfyyWMp0_gMKgM_fOLlU=s918-w918-h612-no'
var key2 = 'https://lh3.googleusercontent.com/sMueihE-u7J0ZinsDdUIBn6OGv5wdw07-SEPguuBLryefVHXs9JFYlaudDMI1ZjIkCM70SoPrU9c6X3G22lwUgiMZotR6MdSrifLhMFzuIm4FTlSBnsRJUfiCBm9_GBubLoMqJamA4CccqoPBgdbDg9myAH0Vmq1AJWta_xeFEu79breOytSrQME-xJXfIYOuprsnDXyJsoTqNtbphG49XA-Ue5ZfzsQA3jewcTQWJydS4l19bP9H-9_xyCoUusbxb42rIrtlsux2uAs-VviNATFHGHh3XnwPP-PA5ofW9LobZ2BXxdITPeZsBSx6xWPHDhj7GfZ4xmxc9KQcrDHFNcVXP5MMFEP5upbJbCKsH6xIgZ73cx8ZzYc6xXpcHkRzw-eFGBexS-lvwZIav0O_B1y4Mty4tqb_m-qezlSDylLYuOasBHODnFsoUDZRzTOKTEp3Z2ddfy0xo_pumpMmEO__OqkBKFua8uHAQlJi9_iCvhzAoVGv45ul_-2DWHRXsNmq6aHzvQ_5GJ7lEMEJNvPq59Agx3jKDO-7pOaX7r_w1IwTkVsuPdxcjDLrcVl0prONtXgwWdZivKUllAm-CgGrLe83Z711ncXMsJRuLDcdmE=w816-h612-no'
var value1 = [
		{	'persistedFaceId': '50859684-4de0-4fb1-ab05-cad99d0e9699',
			'faceRectangle': {
				'top': 161,
				'left': 345
			}
		}
];
var value2 = [
		{	'persistedFaceId': '776ccbe4-821d-45c1-aab0-360f8f819483',
			'faceRectangle': {
				'top': 20,
				'left': 50
			}	
		},
		{	'persistedFaceId': 'b88e189c-dc0c-480c-b728-e42c99f9db2a',
			'faceRectangle': {
				'top': 30,
				'left': 80
			}	
		},
		{	'persistedFaceId': '25213e27-14f0-43fd-9729-ab33d7a30c74',
			'faceRectangle': {
				'top': 40,
				'left': 100
			}
		}
];
map.set(key1, value1);
map.set(key2, value2);

function query() {
	// load(function(err, map){
	// 	if (err) {
	// 		console.error("unable to load map " + err.stack);
	// 	} else {
	// 		console.log( "after load ");
	// 		// querySQL(map, function(err){
	// 		// 	if (err) {
	// 		// 		console.error(" query failed " + err.stack);
	// 		// 	} else {
	// 		// 		console.log( " finished ");
	// 		// 	}
	// 		// })
	// 	}
	// })
	console.log(" hello ");
}

// function load(cb){
// 	var map = new Map();
// 	var key1 = 'https://lh3.googleusercontent.com/OgH5COQg2XtBHX7osb6Cz4S47Cyut4tWzonRpcng0lpC8YyBbzGjb76IAW1BTjy6pCNOMA03LVgAlDXUkCo7k0mQxZOFOuZy-VA3v9Se4O2F_m_TCZMyW13CioClrzKn9ye-lTfg8iwopmyAu43cnvfvm4HK4-YugGfgvQ3gVFtyUwNNCIr-8psHkNusQqudzS4Ky6lfcTtFrq19lAHHttKsQj6WUgkfJDFcPHIoxCXrooGQwz93ZN4FE7vs_GtWsgnvLWwUinqw2e3h93UYrpjmIcPKzYxsZ1zaRccO0J9UqSphIVDuFwuNPZsrEWjw_rioqP4VQhxGEPWmACRWi1puUQEu7X-IZxpjA4kfQMUGS4vDI9ZfxQ28ACSwZZxit7oX5ZRnuFoAKh8pgS9WPcAOwh40dM8ETr2y-GnwZ2rl6XcdskVWhkgav81Tnd-pX2ig8bYGhnkjqYxGleoNtEfdw__JkB17Vr6ZkjnNKLLzMYq00QPFonSkZRWc5ILj00wdz4yWoseQHUiZbdvLpuotFwnVIOyBw4S8cT_ntJVF456lyZUCfyyWMp0_gMKgM_fOLlU=s918-w918-h612-no'
// 	var key2 = 'https://lh3.googleusercontent.com/sMueihE-u7J0ZinsDdUIBn6OGv5wdw07-SEPguuBLryefVHXs9JFYlaudDMI1ZjIkCM70SoPrU9c6X3G22lwUgiMZotR6MdSrifLhMFzuIm4FTlSBnsRJUfiCBm9_GBubLoMqJamA4CccqoPBgdbDg9myAH0Vmq1AJWta_xeFEu79breOytSrQME-xJXfIYOuprsnDXyJsoTqNtbphG49XA-Ue5ZfzsQA3jewcTQWJydS4l19bP9H-9_xyCoUusbxb42rIrtlsux2uAs-VviNATFHGHh3XnwPP-PA5ofW9LobZ2BXxdITPeZsBSx6xWPHDhj7GfZ4xmxc9KQcrDHFNcVXP5MMFEP5upbJbCKsH6xIgZ73cx8ZzYc6xXpcHkRzw-eFGBexS-lvwZIav0O_B1y4Mty4tqb_m-qezlSDylLYuOasBHODnFsoUDZRzTOKTEp3Z2ddfy0xo_pumpMmEO__OqkBKFua8uHAQlJi9_iCvhzAoVGv45ul_-2DWHRXsNmq6aHzvQ_5GJ7lEMEJNvPq59Agx3jKDO-7pOaX7r_w1IwTkVsuPdxcjDLrcVl0prONtXgwWdZivKUllAm-CgGrLe83Z711ncXMsJRuLDcdmE=w816-h612-no'
// 	var value1 = [
// 			{	'persistedFaceId': '50859684-4de0-4fb1-ab05-cad99d0e9699',
// 				'faceRectangle': {
// 					'top': 161,
// 					'left': 345
// 				}
// 			}
// 	];
// 	var value2 = [
// 			{	'persistedFaceId': '776ccbe4-821d-45c1-aab0-360f8f819483',
// 				'faceRectangle': {
// 					'top': 20,
// 					'left': 50
// 				}	
// 			},
// 			{	'persistedFaceId': 'b88e189c-dc0c-480c-b728-e42c99f9db2a',
// 				'faceRectangle': {
// 					'top': 30,
// 					'left': 80
// 				}	
// 			},
// 			{	'persistedFaceId': '25213e27-14f0-43fd-9729-ab33d7a30c74',
// 				'faceRectangle': {
// 					'top': 40,
// 					'left': 100
// 				}
// 			}
// 	];
// 	map.set(key1, value1);
// 	map.set(key2, value2);
// 	console.log(" finish ");
// 	return cb.map;
// }

function querySQL(map) {
 	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'cdyz.cgbeayleuoe5.us-west-2.rds.amazonaws.com',
		user: 'dyunwen',
		password: '197858jwh',
		port: '3306'
	})
	connection.connect(function(err) {
		if (err) {
			console.error('database error' + err.stack );
			return;
		} 
		console.log(" connection success ");
		for (var i in map) {
			var list = map[i];
			if (list) {
				for (var j in list) {
					var fid = list[j].persistedFaceId;
					connection.query({
						sql: 'SELECT * FROM \'MissingPerson\' WHERE \'fid\' = ?',
						timeout: 40000,
						values: [fid]
					}, function(err, result){
						if (err) {
							console.error('query error' + err.stack);
						} else {
							console.log(" find a match ");
							console.log(result);
							list[j] += result;
						}
					});
				}
			}
		}
	});
}

module.exports.query = query;

