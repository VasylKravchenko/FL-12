let a = prompt('enter first side length');
let b = prompt('enter second side length');
let c = prompt('enter third side length');

if (a !== Number || a !== '' || a <= 0) {
    confirm('input values should be ONLY numbers');
} else if (b !== Number || b !== '' || b <= 0) {
    confirm('input values should be ONLY numbers');
} else if (c !== Number || c !== '' || c <= 0) {
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
