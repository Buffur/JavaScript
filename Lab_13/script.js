function insMiddle(array, element) {
    const middleIndex = Math.floor(array.length / 2);
    return [...array.slice(0, middleIndex), element, ...array.slice(middleIndex)];
}

const originalArray = [1, 2, 4, 5];
const newArray = insMiddle(originalArray, 3);

console.log(newArray);