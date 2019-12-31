function makeNumber (str) {
    let number = '';
    for (let char of str) {
        if (char % 1 === 0) {
            number += char
        }
    }
    return number;
}

function countNumbers (str) {
    let numStr = makeNumber(str);
    let count = {};
    for (let number of numStr) {
        if (number in count) {
            count[number] += 1;
        } else {
            count[number] = 1;
        }
    }
    return count;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
