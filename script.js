document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Scroll effect for header
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// Generate star box shadows
function generateStars(count, size) {
    let boxShadow = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        boxShadow += `${x}px ${y}px #FFF`;
        if (i < count - 1) {
            boxShadow += ', ';
        }
    }
    document.getElementById(`stars${size}`).style.boxShadow = boxShadow;
}

generateStars(700, '');
generateStars(200, '2');
generateStars(100, '3');