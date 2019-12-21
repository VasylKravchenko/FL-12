let a = +prompt('enter first value');
let b = +prompt('enter second value');
let c = +prompt('enter third value');

let two = 2;
let four = 4;
let discr = b * b - four * a * c;
let sqrDiscr = Math.sqrt(discr);

if (a === 0 && b === 0 && c === 0) {
    console.log('invalid input data');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('invalid input data');
} else if (discr < 0) {
    console.log('no solution');
} else if (discr === 0) {
    console.log(`x = ${(-b - sqrDiscr) / (two * a)}`);
} else if (discr > 0) {
    console.log(`x1 = ${(-b + sqrDiscr) / (two * a)} and x2 = ${(-b - sqrDiscr) / (two * a)}`)
}
