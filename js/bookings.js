document.addEventListener('DOMContentLoaded', () => {
    // Initialize Flatpickr for the availability calendar
    flatpickr("#availability-calendar", {
        inline: true,
        mode: "multiple",
        dateFormat: "Y-m-d",
        disable: [
            // Add dates that are not available here
            // Format: "YYYY-MM-DD"
            "2024-08-15",
            "2024-08-16",
            "2024-08-17"
        ]
    });

    // Initialize Flatpickr for the date input in the booking form
    flatpickr("#date", {
        minDate: "today",
        dateFormat: "Y-m-d",
        disable: [
            // Add dates that are not available here (same as above)
            "2024-08-15",
            "2024-08-16",
            "2024-08-17"
        ]
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

    // Form submission handling
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                alert('Booking request sent successfully!');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert('There was an error sending your booking request. Please try again later.');
            console.error(error);
        }
    });
});
