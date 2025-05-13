const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

window.addEventListener('load', () => {
    const savedData = sessionStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        usernameInput.value = formData.username || '';
        emailInput.value = formData.email || '';
    }
});

saveButton.addEventListener('click', () => {
    const formData = {
        username: usernameInput.value,
        email: emailInput.value
    };
    sessionStorage.setItem('formData', JSON.stringify(formData));
    alert('Дані збережено!');
});

clearButton.addEventListener('click', () => {
    sessionStorage.removeItem('formData');
    form.reset();
    alert('Дані очищено!');
});