// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const imageWrapper = document.querySelector('.image-wrapper');
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');
    let currentIndex = 0;
    let interval;

    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        imageWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function startAutoSlide() {
        interval = setInterval(showNextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    rightButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoSlide();
    });

    leftButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoSlide();
    });

    window.addEventListener('resize', updateSlidePosition);

    startAutoSlide(); // Start the automatic scrolling
});
