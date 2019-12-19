let a = +prompt('enter first side length');
let b = +prompt('enter second side length');
let c = +prompt('enter third side length');

if (a === b && b === c) {
    confirm('Equivalent triangle');
} else if (a === b || b === c || c === a) {
    confirm('Isosceles triangle');
} else if (a < b + c && b < a + c && c < a + b) {
    confirm('Normal triangle');
} else {
    confirm("Triangle doesn't exist")
}
