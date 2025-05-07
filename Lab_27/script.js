const button = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');
let clickCount = 0;

const handleClick = () => {
    clickCount++;
    counterDisplay.textContent = `Кількість кліків: ${clickCount}`;
};

button.addEventListener('click', handleClick);