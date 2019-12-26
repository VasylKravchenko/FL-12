function addOne(num) {
    return num + 1;
}

function pipe() {
    for(let i = 1; i < arguments.length; i++) {
        arguments[0] = arguments[i](arguments[0]);
    }
    return arguments[0];
}

console.log(pipe(5, addOne, addOne))
