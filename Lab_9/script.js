const calc = (a, b, operation) => operation(a, b);
console.log(calc(4, 2, (x, y) => x + y));