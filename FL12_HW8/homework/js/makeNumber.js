function makeNumber (str) {
    let number = '';
    for (let char of str) {
        if (char % 1 === 0) {
            number += char
        }
    }
    return number;
}

console.log(makeNumber('erer384jjjfd123')); //384123
console.log(makeNumber('ijifjgdj')); //''
