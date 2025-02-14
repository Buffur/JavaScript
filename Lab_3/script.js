// 1. Оголошення змінних різних типів
let str = "Привіт";
let num = 52;
let bool = true;
let und;
let nul = null;

// Виведення значень та типів
console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(und, typeof und);
console.log(nul, typeof nul);

// 2. Перетворення
let numStr = String(num);
console.log(numStr, typeof numStr);

let strNum = Number("123");
console.log(strNum, typeof strNum);

let Tobool = Boolean(0);
console.log(Tobool, typeof Tobool);

// 3. Неявне перетворення в математичних виразах
console.log("5" + 3);
console.log("5" - 3);
console.log(true + 2);

// 4. Функція для визначення типу
function getType(value) {
    return typeof value;
}

console.log(getType(42));
console.log(getType("text"));
console.log(getType(false));

// 5. Порівняння значень різних типів
console.log(5 == "5");
console.log(5 === "5");

console.log(null == undefined);
console.log(null === undefined);