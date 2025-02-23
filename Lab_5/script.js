// 1. Вивести всі парні числа від 1 до 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 2. Вивести всі числа від n до 1
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}

// // 3. Запитувати у користувача число, поки він не введе позитивне 
// do {
//     num = prompt("Введіть позитивне число:");
// } while (num <= 0);
// console.log("Ви ввели:", num);

// 4. Вивести всі ключі та значення у заданому об'єкті
let user = { name: "Вадим", age: 17, city: "Кривий Ріг" };
for (let key in user) {
    console.log(key + ":", user[key]);
}

// 5. Вивести всі елементи масиву у зворотному порядку
let arr = [1, 2, 3, 4, 5];
for (let item of arr.reverse()) {
    console.log(item);
}

// 6.1 forEach(), вивод всі елементи масиву
arr.forEach(element => console.log(element));

// 6.2 map(), для створення масиву квадратів чисел
let squares = arr.map(num => num * num);
console.log(squares);

// 6.3 filter(), для створення масиву чисел більше 10
let filtered = squares.filter(num => num > 10);
console.log(filtered);