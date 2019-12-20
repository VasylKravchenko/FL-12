let a = +prompt('enter first side length');
let b = +prompt('enter second side length');
let c = +prompt('enter third side length');

if (a <= 0 || b <= 0 || c <= 0) {
    confirm('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    confirm('input values should be ONLY numbers');
} else if (a === b && b === c) {
    confirm('Equivalent triangle');
} else if (a === b || b === c || c === a) {
    confirm('Isosceles triangle');
} else if (a < b + c && b < a + c && c < a + b) {
    confirm('Normal triangle');
} else {
    confirm("Triangle doesn't exist")
}
