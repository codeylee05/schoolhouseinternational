const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });


/* Secondary navbar */
document.querySelector('.campuses-link > a').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    this.parentElement.classList.toggle('active'); // Toggle 'active' class on parent <li>
});

let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const campusesLink = document.querySelector('.campuses-link');
    campusesLink.classList.remove('active'); // Hide the submenu on scroll
});


/*Testimonials carousel */
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * (100 / testimonials.length);
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Initialize first testimonial as active
testimonials[currentIndex].classList.add('active');


