const checkbox = document.getElementById('styleBox');
const targetElem = document.getElementById('targetElem');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        targetElem.style.backgroundColor = 'lightgreen';
        targetElem.style.border = '2px solid black';
    } else {
        targetElem.style.backgroundColor = 'lightblue';
        targetElem.style.border = 'none';
    }
});