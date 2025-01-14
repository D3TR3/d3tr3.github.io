// Animation observer for elements with fade-in and slide effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showAnimation');
        } else {
            entry.target.classList.remove('showAnimation');
        }
    });
});

// DOM element selections
const menuButton = document.getElementById('menu-button');
const navbar = document.getElementById('navbar');
const appear = document.querySelectorAll('.appearAnimation');
const appearImages = document.querySelectorAll('.appearImage');
const image = document.getElementById('image');
const enlargedImageModal = document.getElementById('enlargedImageModal');
const enlargedImage = document.getElementById('enlargedImage');
const scrollToTopButton = document.getElementById('scrollToTop');
const closeModal = document.getElementById('closeModal');

// Smooth scrolling functionality for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Active section highlighting in navigation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('text-blue-600', 'font-bold');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('text-blue-600', 'font-bold');
                    }
                });
            }
        });
    }, { threshold: 0.7 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Image modal functionality
image.addEventListener('click', () => {
    enlargedImageModal.classList.remove('hidden');
});

enlargedImageModal.addEventListener('click', () => {
    enlargedImageModal.classList.add('hidden');
});

// Initialize animation observers for content elements
appear.forEach((element) => {
    observer.observe(element);
});

appearImages.forEach((element) => {
    observer.observe(element);
});

// Mobile menu button toggle functionality
menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('active');
    if (navbar.classList.contains('visible')) {
        navbar.classList.remove('visible');
        setTimeout(() => {
            navbar.classList.add('hidden');
        }, 100);
    } else {
        navbar.classList.remove('hidden');
        setTimeout(() => {
            navbar.classList.add('visible');
        }, 10);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
        menuButton.classList.remove('active');
        navbar.classList.remove('visible');
        setTimeout(() => {
            navbar.classList.add('hidden');
        }, 100);
    }
});

// Scroll to Top button visibility control
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.remove('opacity-0', 'invisible');
        scrollToTopButton.classList.add('opacity-100');
    } else {
        scrollToTopButton.classList.add('opacity-0');
        scrollToTopButton.classList.remove('opacity-100');
        setTimeout(() => {
            if (window.scrollY <= 500) {
                scrollToTopButton.classList.add('invisible');
            }
        }, 300);
    }
});

// Smooth scroll to top when clicking the scroll button
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

