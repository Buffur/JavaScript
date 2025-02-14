// 1. Оголошення змінних
var a = 10;
let b = "Hello";
const c = true;

// 2. Визначення типів змінних
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 3. Створення об'єкта
let student = {
    name: "Олег",
    age: 20,
    ststudent: true
};

// 4. Додавання нового поля
student.university = "НАУ";
console.log(student);

// 5. Зміна типу змінної
b = 42;
console.log(typeof b);

// 6. Спроба зміни значення const
try {
    c = false;
} catch (error) {
    console.log("Помилка");
}