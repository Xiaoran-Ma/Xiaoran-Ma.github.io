// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Abstract toggle
function toggleAbstract(el) {
    const abstract = el.nextElementSibling;
    const isOpen = abstract.classList.contains('open');

    if (isOpen) {
        abstract.classList.remove('open');
        el.classList.remove('open');
        el.querySelector('.toggle-text').textContent = 'Show Abstract';
    } else {
        abstract.classList.add('open');
        el.classList.add('open');
        el.querySelector('.toggle-text').textContent = 'Hide Abstract';
    }
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll(
    '.about-main, .about-highlight, .interest-card, .timeline-item, ' +
    '.paper-item, .teaching-card, .service-card, .skill-category, .ref-card'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
