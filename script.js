// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Get the section id
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Scroll to the section with a little offset for the navbar
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar - Adds a class when the page is scrolled
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add animation for section when in viewport
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.3
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    sectionObserver.observe(section);
});

// Dynamically add hover effect to cards for more interactive feedback
const allCards = document.querySelectorAll('.job-card, .project-card, .skills-card, .education-card');
allCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
