const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((num, index, arr) => {
    if (num % 2 !== 0) {
        arr[index] = 0;
    }
});

console.log(numbers);