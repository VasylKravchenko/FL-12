const one = 1, two = 2, three = 3, five = 5, eight = 8;

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
console.log(mapArray([two, '5', three], function(el) {
    return el + three
}));

//task4
function filterArray(arr, func) {
    let newArr = [];
    executeForEach(arr, function (arr) {
        if (func(arr)) {
            newArr.push(arr);
        }
    });
    return newArr;
}
console.log(filterArray([two, five, eight], function(el) {
    return el % two === 0
}));

//task5
function flipOver(str) {
    let newStr = '';
    for (let i = str.length - one; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(flipOver('hey world'));

//task6
function makeListFromRange(range) {
    let arr = [];
    let start = range[0];
    let end = range[1];
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(makeListFromRange([two, eight]));

//task7
function getArrayOfKeys(arr, keyName) {
    let names = [];
    executeForEach(arr, function(el) {
        names.push(el[keyName])
    });
    return names;
}

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
console.log(getArrayOfKeys(actors, 'name'));
