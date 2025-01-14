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
                    // Remove previous active classes
                    link.classList.remove('text-blue-600', 'font-bold');
                    
                    // Get the href attribute and check if it's valid
                    const href = link.getAttribute('href');
                    if (href && entry.target.id) {
                        // Compare after removing the '#' from href if it exists
                        const linkTarget = href.startsWith('#') ? href.substring(1) : href;
                        if (linkTarget === entry.target.id) {
                            link.classList.add('text-blue-600', 'font-bold');
                        }
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

const viewProjectBtn = document.querySelector('[data-view-project]');
if (viewProjectBtn) {
    viewProjectBtn.addEventListener('click', () => {
        enlargedImageModal.classList.remove('hidden');
    });
}

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

// Blob animation with fallback for mobile
const blob = document.getElementById("blob");

// Function to create smoother random movement for the blob
function moveBlob() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Create more natural movement bounds
    const maxX = viewportWidth * 0.7;
    const maxY = viewportHeight * 0.7;
    const minX = viewportWidth * 0.3;
    const minY = viewportHeight * 0.3;
    
    const randomX = minX + Math.random() * (maxX - minX);
    const randomY = minY + Math.random() * (maxY - minY);
    
    blob.animate({
        left: `${randomX}px`,
        top: `${randomY}px`
    }, {
        duration: 2000,
        fill: "forwards",
        easing: "ease-in-out"
    });
}

// Check if pointer events are supported
if (window.matchMedia("(pointer: fine)").matches) {
    // Desktop - follow cursor
    document.body.onpointermove = event => {
        const { clientX, clientY } = event;
        
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, {
            duration: 3000,
            fill: "forwards",
            easing: "ease-in-out"
        });
    };
} else {
    // Mobile - smoother random movement
    setInterval(moveBlob, 2000); 
    moveBlob(); // Initial movement
}

document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-scroll-to]');
    if (!target) return;
    
    e.preventDefault();
    const elementToScrollTo = document.querySelector(`#${target.dataset.scrollTo}`);
    if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});


// Age Calculator
function calculateAge(birthDate) {
    const currentDate = new Date();
    const birth = new Date(birthDate);
    let age = currentDate.getFullYear() - birth.getFullYear();
    const monthDiff = currentDate.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Update age in real-time
function updateAge() {
    const ageElement = document.getElementById('age');
    if (ageElement) {
        const age = calculateAge('2006-03-16'); // Your birthdate in YYYY-MM-DD format
        ageElement.textContent = age;
    }
}

// Initial age calculation
updateAge();

// Update age every day (optional, but ensures accuracy if the page is left open)
setInterval(updateAge, 1000 * 60 * 60 * 24);