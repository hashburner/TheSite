document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.animate-left', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.animate-right', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.animate-top', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.animate-bottom', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    // Parallax effect for background
    const parallaxElements = document.querySelectorAll('.parallax');
    
    // Smooth header animation on scroll
    const header = document.querySelector('header');
    const scrollThreshold = 100; // Adjust this value to change when the header starts hiding

    // Title and subtitle animation
    const homeTitle = document.querySelector('#home h1');
    const homeSubtitle = document.querySelector('#home h2');
    
    let lastScrollTop = 0;
    let ticking = false;
    
    function getScrollPercentage() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (scrollTop / scrollHeight) * 100;
    }

    function updateAnimations() {
        const scrollPercentage = getScrollPercentage();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Parallax effect
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed;
            el.style.transform = `translateY(${scrollTop * speed}px)`;
        });

        // Header hide/show logic
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        // Title and subtitle animation
        const progress = Math.min(scrollPercentage / 15, 1); // Adjust 15 to change how quickly the animation completes

        // Animate the title (Killian Taylor)
        const scale = 1 - progress * 0.2; // Scale from 1 to 0.8
        const opacity = Math.max(1 - progress * 2, 0); // Opacity from 1 to 0, ensuring it reaches 0
        const blur = progress * 8; // Blur from 0 to 8px
        
        homeTitle.style.transform = `scale(${scale})`;
        homeTitle.style.opacity = opacity;
        homeTitle.style.textShadow = `0 ${blur}px ${blur * 2}px rgba(0, 0, 0, ${0.5 * progress})`;
        
        // Animate the subtitle (Professional Sound Engineer)
        const subtitleDrop = progress * 100; // Drop by 100px at max progress
        const subtitleOpacity = Math.max(1 - progress * 2, 0); // Opacity from 1 to 0, ensuring it reaches 0
        
        homeSubtitle.style.transform = `translateY(${subtitleDrop}px)`;
        homeSubtitle.style.opacity = subtitleOpacity;
        homeSubtitle.style.zIndex = progress > 0.5 ? '-1' : '1'; // Move behind parallax at halfway point

        // Add or remove the 'scrolled' class based on scroll position
        if (scrollPercentage > 5) {
            homeTitle.classList.add('scrolled');
        } else {
            homeTitle.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call to set correct state on page load
    updateAnimations();

    // Smooth scrolling for project list
    const projectList = document.querySelector('.project-list');
    let isDown = false;
    let startX;
    let scrollLeft;

    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (!isTouchDevice) {
        projectList.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - projectList.offsetLeft;
            scrollLeft = projectList.scrollLeft;
        });

        projectList.addEventListener('mouseleave', () => {
            isDown = false;
        });

        projectList.addEventListener('mouseup', () => {
            isDown = false;
        });

        projectList.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectList.offsetLeft;
            const walk = (x - startX) * 2;
            projectList.scrollLeft = scrollLeft - walk;
        });
    }

    // Remove touch event listeners for mobile devices
    projectList.removeEventListener('touchstart', () => {});
    projectList.removeEventListener('touchend', () => {});
    projectList.removeEventListener('touchmove', () => {});
});