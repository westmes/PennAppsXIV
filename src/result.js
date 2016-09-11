var async = require("async");
var faceAPI = require('../src/faceAPI');
var findMissing = require('../src/findMissing');

function findMatchesInPhotos(photos, cb) {
	var myMap = new Map();
	// iterate over every photo
	var len = photos.length;
	for (var i in photos) {
		var photoURL = photos[i].content.src;
		// res: every faces in this photo, res is a array
		// faceAPI.postCode(photos[i].content.src, function(res) {
		// 	console.log("inner " + i)
		// 	inner(res, photoURL, function(list){
		// 		// console.log(list);
		// 		console.log(photoURL)
		// 		myMap.set(photoURL, list);
		// 		if (myMap.length == photos.length){
		// 		// console.log("finally")
		// 			return cb(myMap);
		// 		}
		// 	})
		// })
		outer(photoURL, myMap, len, function(map){
			// console.log(map)
			return cb(map)
			// setTimeout(function () {
			// 	console.log("outer finished!!!!!!")
			// 	return cb(map);
			// },10000)
		})

	}
}

function outer(url, myMap, len, cb) {
	// console.log("pass in length: " + len)
	faceAPI.postCode(url, function(res) {
		var r = res.slice();
		var le = r.length;
		var u = url;
		inner(r, le, u, function(list){
			// console.log("list:" + JSON.stringify(list))
			myMap.set(u, list);
			// console.log("mapLength:" + myMap.size)
			// if (myMap.size === len){
			// 	// console.log(myMap)
			// 	console.log("+++++++++++++++++++++++++")
			// 	return cb(myMap);
			// }
			setTimeout(function () {
				// console.log("inner finished!!!!!!")
				return cb(myMap);
			},10000)
		})
	})
}

function inner(faces, len, url, cb){
	var f = faces.slice();
	var l = f.length;
	var array = [];
	for (var i=0; i < l; i++) {
	    var face = f[i];
	    findMissing.findMissing(face['faceId'], function(hit) {
		    if (hit.length !== 0) {
		        var info = {
	          		faceRectangle: face['faceRectangle'],
	             	persistedFaceId: hit[0]['persistedFaceId']
		        }
		    } else {
	          	var info = undefined;  	
		    }
		    array.push(info); 
		    if (array.length == l){
		    	// console.log(l)
		    	// console.log("array:" + JSON.stringify(array));
		    	return cb(array)
		    }
	    })
	}	
}

module.exports.findMatchesInPhotos = findMatchesInPhotos;

// function findMatches(photoURL, myMap) {
//   faceAPI.postCode(photoURL, function(res) {
//     // console.log(res);
//     for (var i=0; i<res.length; i++) {
//       var face = res[i];
//       findMissing.findMissing(face['faceId'], function(hit) {
//         if (hit.length != 0) {
//           for (var j=0; j<hit.length; j++) {
//             var ls = myMap.get(photoURL);
//             if (ls === undefined) {
//               ls = [];
//             }
//             var info = {
//               faceRectangle: face['faceRectangle'],
//               persistedFaceId: hit[j]['persistedFaceId']
//             }
//             // console.log(JSON.stringify(info));
//             ls.push(info);
//             myMap.set(photoURL, ls);
//           }
//           // console.log(JSON.stringify(hit));
//         }
        
//       })
//     }
//   })
// }