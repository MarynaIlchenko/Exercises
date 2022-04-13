//---------------------forEach----------------------------------//
//*Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел*//
// const numbers = [8, 2, 13, 5, 6, 20];
// let newNumbers = [];
// numbers.forEach(function(elem) {
//     newNumbers.push(elem * elem);
// });
// alert(newNumbers)

//  Дан массив с числами. Найдите сумму этих чисел.//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let totalSumArr = 0;
// arr.forEach(function (elem) {
//     totalSumArr += elem;
// });
// alert(totalSumArr)

// --------------------Map-------------------------
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// const arr = [2, 3, 5, 6, 9];
// let newArr = [];
// arr.map(function (elem) {
//     newArr.push(elem * elem);
// });
// alert(newArr);

// ------------- every, some ------------------------
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// const arr = [1, 20, 33, 32, 21, 0];
// function biggerThenNull(element, index, array) {
//     return element > 0;
// };
// [1, 20, 33, 32, 21, 0].every(biggerThenNull);

//-----------------------PROMISES-------------------------
// const promise = new Promise((resolve, reject) => {
//     // если в const что ниже - true, то выполняется if (canFulfill)
//     const canFulfill = Math.random() > 0.5;
//     setTimeout(() => {
//         if (canFulfill) {
//         // когда этот if выполняется - вызывается resolve
//         resolve('Промис віполнился успешно с результатом (исполнен, fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонен, rejected)');
// }, 2000);
// });
// // если промис выполнится успешно, то в result будет передана фраза что стоит в resolve
// promise.then(
//     result => {
//         console.log(`${result}`);
//     },
//     // а если неуспешно, то выполни эту функцию и в error будет передано то, что записано в reject
//     error => {
//         console.log(`${error}`);
//     },
// );
// // цепочки промисов
// promise
//     .then(result => {
//         console.log(result);
//         return 5;
//     })
//     // в х будет 5ка (то что в возврате предидущего  then)
//     .then(x => {
//         console.log(x);
//         return 10;
//     })
//     // в у будет 10ка
//     .then(y => {
//         console.log(y);
//     });

// const makeOrder = dish => {
//     const DELAY = 1000;
//     const promise = new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if (passed) {
//                 resolve('your dish');
//             }
//             reject('food is off');
//         }, DELAY);
//     });
//     return promise;
// };

// const p = makeOrder('donut');
// console.log(p);

// const x = 1
// const x = 'hello!'
// console.log(x)

// let b = 20
// if (true) {
//     console.log(b)
//     let b = 10
// }

// const x;
// x = 1;
// console.log(x);
// let a = 1
// const b = 'pro'
// if (b === 'free') {
//     a = 10
// } else if (b === 'pro') {
//     a = 5
// } else {
//     a = 2
// }
// console.log(a)

// let type
// const age = 20
// const type = age >= 18 ? 'adult' : 'child'
// console.log(type)

// if (age >= 18) {
//     type = 'adult'
// } else {
//     type = 'child'
// }
// console.log(type)

const num1 = 5
const num2 = 10
const biggerNumber = num1 > num2 ? num1 : num2
console.log(biggerNumber)
