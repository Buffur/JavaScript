// 1. Визначення погоди
let temperature = 25;
if (temperature < 10) {
    console.log("Холодно");
} else if (temperature >= 10 && temperature <= 25) {
    console.log("Тепло");
} else {
    console.log("Спекотно");
}

// 2. Перевірка парності
let number = 9;
console.log(number % 2 === 0 ? "Парне" : "Непарне");

// 3. Визначення дня тижня
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Понеділок");
        break;
    case "Tuesday":
        console.log("Вівторок");
        break;
    case "Wednesday":
        console.log("Середа");
        break;
    case "Thursday":
        console.log("Четвер");
        break;
    case "Friday":
        console.log("П’ятниця");
        break;
    case "Saturday":
        console.log("Субота");
        break;
    case "Sunday":
        console.log("Неділя");
        break;
    default:
        console.log("Невідомий день");
}

// 4. Перевірка пароля
let password = "admin123";
if (password === "admin123") {
    console.log("Доступ дозволено");
} else {
    console.log("Доступ заборонено");
}