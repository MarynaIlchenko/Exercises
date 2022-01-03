//*Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел*//
// const numbers = [8, 2, 13, 5, 6, 20];
// let newNumbers = [];
// numbers.forEach(function(elem) {
//     newNumbers.push(elem * elem);
// });
// alert(newNumbers)

//  Дан массив с числами. Найдите сумму этих чисел.//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let totalSumArr = 0;
arr.forEach(function (elem) {
    totalSumArr += elem;
});
alert(totalSumArr)