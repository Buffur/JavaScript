function crMulti(coefficient) {
    return function(number) {
        return number * coefficient;
    };
}

const double = crMulti(2);
const triple = crMulti(3);

console.log(double(5));
console.log(triple(5));
console.log(double(10));
console.log(triple(10));