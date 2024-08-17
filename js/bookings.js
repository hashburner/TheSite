document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const fileInput = document.getElementById('demo-file');
    const fileLabel = document.querySelector('.file-label');
    const fileName = document.getElementById('file-name');

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

    // File drag and drop functionality
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        fileLabel.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileLabel.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileLabel.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        fileLabel.classList.add('highlight');
    }

    function unhighlight() {
        fileLabel.classList.remove('highlight');
    }

    fileLabel.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        fileInput.files = files;
        updateFileName();
    }

    // File input change event
    fileInput.addEventListener('change', updateFileName);

    function updateFileName() {
        const file = fileInput.files[0];
        if (file) {
            fileName.textContent = `Selected file: ${file.name}`;
        } else {
            fileName.textContent = '';
        }
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Show success message
                alert('Booking request sent successfully!');
                form.reset();
                fileName.textContent = '';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your booking request. Please try again later.');
        }
    });

    // Material Design-inspired input animations
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentNode.classList.remove('focused');
            }
        });

        // Check initial state
        if (input.value !== '') {
            input.parentNode.classList.add('focused');
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for background
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});