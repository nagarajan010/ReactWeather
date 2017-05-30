// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('Coty not found');
// }
//
// getTempCallback('Chennai', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//        resolve(79);
//        reject("City not found");
//     });
// }
//
// getTempPromise("Chennai").then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });


//
// function addPromise(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (typeof a === 'number' && typeof b === 'number') {
//             resolve(a + b);
//         } else {
//             reject("Only numbers must be used");
//         }
//     });
// }
//
// addPromise(1, "d").then(function (total) {
//     console.log('added number is ', total);
// }, function (err) {
//     console.log('validation error', err);
// });

// function add(a, b) {
//     return a + b;
// }
//
//
// console.log(add(1,3));
// console.log(add(5,3));
// console.log(add(1,6));