function product(...numbers) {
    if (numbers.length === 0) return 1;
    
    const [first, ...rest] = numbers;
    
    return first * product(...rest);
}

console.log(product(2, 3, 4));
console.log(product(5, 10));
console.log(product(7));
console.log(product());