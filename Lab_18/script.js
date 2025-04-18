const users = [
    { name: "Test1", age: 17 },
    { name: "Test2", age: 20 },
    { name: "Test3", age: 16 },
    { name: "Test4", age: 25 }
];
const adults = users.filter(user => user.age > 18);

console.log(adults);