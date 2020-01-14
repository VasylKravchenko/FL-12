const one = 1, two = 2, three = 3;
// task 1
function convert() {
    let valArr = [];
    for (let i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] === 'number') {
            arguments[i] = arguments[i].toString();
        } else if (typeof arguments[i] === 'string') {
            arguments[i] = parseInt(arguments[i]);
        }
        valArr.push(arguments[i]);
    }
    return valArr;
}
console.log(convert('1', two, three, '4'));

//task2
function executeForEach(arr, func) {
    for(let i of arr) {
        func(i)
    }
}

//task3
function mapArray(arr, func) {
    let newArr = [];
    executeForEach(arr, function (arr) {
        newArr.push(func(parseInt(arr)));
        });
    return newArr;
}

// console.log(mapArray([two, '5', three], function(el) {
//     return el + three
// }));
