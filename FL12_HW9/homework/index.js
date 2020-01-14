// task 1
function convert() {
    let valArr = [];
    for (let i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] === 'number') {
            arguments[i] = String(arguments[i]);
        } else if (typeof arguments[i] === 'string') {
            arguments[i] = Number(arguments[i]);
        }
        valArr.push(arguments[i]);
    }
    return valArr;
}

// convert('1', 2, 3, '4');

//task2
function executeForEach(arr, func) {
    for(let i of arr) {
        func(i)
    }
}

executeForEach([1,2,3], function(el) {
    console.log(el * 2)
} )
