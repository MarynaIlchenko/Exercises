//*Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел*//
const numbers = [8, 2, 13, 5, 6, 20];
let newNumbers = [];
numbers.forEach(function(elem) {
    newNumbers.push(elem * elem);
});
alert(newNumbers)


