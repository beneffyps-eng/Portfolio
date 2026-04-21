// Function to handle the Mobile Menu Toggle
const initApp = () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Toggle logic: when button clicked, add/remove 'active' class
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // Add a shadow to the navbar when scrolling down
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            navbar.style.background = '#0a101f';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = '#0f172a';
        }
    });
};

// Run the script once the page is fully loaded
document.addEventListener('DOMContentLoaded', initApp);