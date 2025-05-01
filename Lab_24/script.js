const image = document.getElementById('image');
const images = [
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://images.unsplash.com/photo-1511255656699-6df8cf250a38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFsbHxlbnwwfHwwfHx8MA%3D%3D'
];
let currentIndex = 0;

image.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
    image.alt = `Image ${currentIndex + 1}`;
});