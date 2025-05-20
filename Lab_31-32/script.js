const startButton = document.getElementById('startButton');
const resultDisplay = document.getElementById('result');

startButton.addEventListener('click', () => {
    resultDisplay.textContent = 'Очікуємо результат...';
    
    const myPromise = new Promise((resolve, reject) => {
        const delay = Math.random() * 5000; 
        setTimeout(() => {
            if (delay > 3000) {
                reject('Час очікування перевищив 3 секунди');
            } else {
                resolve('Операція успішна');
            }
        }, delay);
    });

    myPromise
        .then(result => {
            resultDisplay.textContent = result;
        })
        .catch(error => {
            resultDisplay.textContent = `Помилка: ${error}`;
        });
});