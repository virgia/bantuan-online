let currentSlide = 0;
const slides = document.querySelectorAll('.hero-image');
const dots = document.querySelectorAll('.dot');
const slideDuration = 5000;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    dots.forEach((dot) => {
        dot.classList.remove('active');
        dot.style.width = '12px';
    });

    slides[index].style.display = 'block';
    dots[index].classList.add('active');
    dots[index].style.width = '38px'; 

    currentSlide = index;
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(0); // Show the first slide

// Set the interval for auto-slide, using the defined duration
setInterval(autoSlide, slideDuration);
