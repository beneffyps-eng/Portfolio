document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', function () {
        // Toggle the 'show' class
        navbarMenu.classList.toggle('hidden');
        navbarMenu.classList.toggle('show');

        // Optional: Change icon from Hamburger to X when open
        if (navbarMenu.classList.contains('show')) {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        } else {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        }
    });

    // Close menu when a link is clicked (good for mobile UX)
    const navLinks = document.querySelectorAll('#navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.add('hidden');
            navbarMenu.classList.remove('show');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
        });
    });
});