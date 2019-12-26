function getMin() {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[0] > arguments[i]) {
      arguments[0] = arguments[i];
      }
    }
  return arguments[0];
  }

console.log(getMin(5, 1, -5)); //-5
