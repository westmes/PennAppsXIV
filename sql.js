function query(data, cb) {
	// load(function(map, err){
	// 	if (err) {
	// 		console.error("unable to load map " + err.stack);
	// 	} else {
	// 		querySQL(map, function(res, err){
	// 			if (err) {
	// 				console.error(" query failed " + err.stack);
	// 			} else {
	// 				// for (var key of res.keys()) {
	// 				// 	var array = res.get(key);
	// 				// 	console.log(" key: " + key );
	// 				// 	for (var i in array) {
	// 				// 		console.log(" value: " + JSON.stringify(array[i]));
	// 				// 	}
	// 				// }
	// 				// console.log(res)
	// 				return res;
	// 			}
	// 		})
	// 	}
	// })
	querySQL(data, function(res, err){
		if (err) {
			console.error(" query failed " + err.stack);
		} else {
			// // for (var key of res.keys()) {
			// // 	var array = res.get(key);
			// 	console.log(" key: " + key );
			// 	for (var i in array) {
			// 		console.log(" value: " + JSON.stringify(array[i]));
			// 	}
			// }
			// console.log(res)
			return cb(res);
		}
	})
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
// 	return cb(map);
// }

function querySQL(map, cb) {
 	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'cdyz.cgbeayleuoe5.us-west-2.rds.amazonaws.com',
		user: 'dyunwen',
		password: '197858jwh',
		port: '3306',
		database: 'cdyzDB'
	})
	connection.connect(function(err) {
		if (err) {
			console.error('database error' + err.stack );
			return;
		} 
		console.log(" mysql successfully connected ");
		var m = new Map();
		for (var key of map.keys()) {
  			var list = map.get(key);
  			if (list) {
				iterator(list, function(l){
					m.set(key, l);
					if (m.length === map.length) {
						return cb(m);
					}
				})
			}
		}
	});
}

function iterator(list, cb) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'cdyz.cgbeayleuoe5.us-west-2.rds.amazonaws.com',
		user: 'dyunwen',
		password: '197858jwh',
		port: '3306',
		database: 'cdyzDB'
	})
	connection.connect(function(err){
		var n = [];
		for (var j in list) {
			var h = list[j]
			if (h == undefined || h == ""){
				n.push('');
				continue;
			} else {
				var fid = h.persistedFaceId;
				connection.query('SELECT * FROM MissingPerson WHERE fid = ?', [fid], function(err, result){
					if (err) {
						console.error('query error ' + err.stack);
					} else {
						if (result) {	
							if (h !== undefined) {
								var r = JSON.stringify(h);
								r = r.substring(0, r.length - 1);
								r = r + ',"name":"' + result[0].name + '",';
								r = r + '"gender":"' + result[0].gender + '",';
								r = r + '"lastseen":"' + result[0].lastseen + '",';
								r = r + '"reporttime":"' + result[0].reporttime + '",';
								r = r + '"status":"' + result[0].status + '",';
								r = r + '"photo":"' + result[0].photo + '"}';
								l = JSON.parse(r);
								n.push(l);
							} else {

							}				
							if (n.length === list.length){
								return cb(n);
							}
						} else {
							//n.push('');
						}	
					}
				});
			}
		}
	})
}

module.exports.query = query;

