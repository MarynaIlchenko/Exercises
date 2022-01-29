//  1 - What the result?
// (function() {
//     var foo = new Object();
//     var bar = new Object();
//     var map = new Object();

//     map[foo] = 'foo';
//     map[bar] = 'bar';

//     return map[foo];
// })();

// // Explanation 
// var result = (function () {
//     var foo = new Object(); // {}
//     var bar = new Object(); // {}
//     var map = new Object(); // {}

//     map[foo] = "foo"; // map["[object Object] "] = "foo"
//     map[bar] = "bar"; // map["[object Object] "] = "bar"
  
//   // Behind the scenes the key the toString method is called for object keys, so:
//   // {}.toString() = "[object Object]"
  
//   console.log({}.toString()); // "[object Object]"
  
//   // Notice that only one key is returned because of the same key name:
//   console.log(Object.keys(map)); // ["[object Object]"]

//     // map["[object Object]"]
//     return map[foo];
// })();


// console.log(result); // "bar"

// ---2- --What the result?
// function f() {
//     return 'foo';
// }
// (function() {
//     if (1 === 0) {
//         function f() {
//             return 'bar';
//         }
//     }
//     return f();
// })();
// A.

// "bar"

// Explanation 
// var result = (function() {
//     function f() {
//         return 'foo';
//     }
//     return (function() {
//         // JavaScript does not have block scope, only function scope. So the function below gets hoisted to the top of the function.
//         if (1 === 0) {
//             function f() {
//                 return 'bar';
//             }
//         }
//         // Now the function that gets called is the one within this environment, so "bar" gets returned. 
//         return f();
//     })();

// })();

// console.log(result); // "bar"

// // Demonstration of the hoisting that happens behind the scenes:
// var result = (function() {
//     function f() {
//         return 'foo';
//     }
//     return (function() {
//         function f() {
//           return 'bar';
//         }
//         if (1 === 0) {

//         }
//         return f();
//     })();

// })();

// console.log(result); // "bar"

