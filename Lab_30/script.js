const lastVisitDisplay = document.getElementById('lastVisit');

const currentVisit = new Date();
const formattedCurrentVisit = currentVisit.toLocaleString('uk-UA');

const lastVisit = localStorage.getItem('lastVisit');
if (lastVisit) {
    lastVisitDisplay.textContent = `Дата останнього відвідування: ${lastVisit}`;
} else {
    lastVisitDisplay.textContent = `Дата останнього відвідування: це ваше перше відвідування`;
}

localStorage.setItem('lastVisit', formattedCurrentVisit);