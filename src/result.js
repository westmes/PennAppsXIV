var async = require("async");
var faceAPI = require('../src/faceAPI');
// var missingList = require('../src/queryMissingList');
var findMissing = require('../src/findMissing');

function findMatchesInPhotos(photos, cb) {
	var myMap = new Map();
	async.each(photos, function(photo, callback) {
		var photoURL = photo.content.src;
		faceAPI.postCode(photoURL, function(results) {
			async.each(results, function(face, callback) {
				findMissing.findMissing(face['faceId'], function(hit) {
					if (hit.length !== 0) {
						var target = hit[0];
						console.log(target);
						var ls = myMap.get(photoURL);
						if (ls === undefined) {
						  ls = [];
						}
						var info = {
						  faceRectangle: face['faceRectangle'],
						  persistedFaceId: target['persistedFaceId']
						}
						// console.log(JSON.stringify(info));
						ls.push(info);
						myMap.set(photoURL, ls);
						callback();
					}
				})
			}, function(err) {
				callback();
			})
		})
	}, function(err) {
		console.log(err);
		// console.log(myMap);
		cb(undefined, myMap);
	})
	// for (var i in photos) {
		
	//   // console.log(photos[i].content.src);
	//   // photoURL.push(photos[i].content.src);
	//   var photoURL = photos[i].content.src;
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
	//           console.log(JSON.stringify(hit));
	//         }
	        
	//       })
	//     }
	//   })
	//   // findMatches(photos[i].content.src, myMap);
	// }
	// console.log(myMap);
	// return 
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