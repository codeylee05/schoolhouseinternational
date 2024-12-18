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



