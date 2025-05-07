const form = document.getElementById('myForm');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.querySelector('input[name="username"]').value;
    message.textContent = `Форма надіслана! Ім'я: ${username}`;
    form.reset();
});