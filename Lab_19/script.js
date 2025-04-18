const nArray = [[1, 2], [3, 4], [5, [6, 7]]];
const fArray = nArray.reduce((acc, curr) => acc.concat(curr), []);

console.log(fArray);