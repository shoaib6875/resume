document.addEventListener('DOMContentLoaded', () => {
    // Custom smooth scroll function
    const smoothScroll = (targetPosition, duration) => {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = progress * (2 - progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    // Select all navbar links
    const navLinks = document.querySelectorAll('.navbar-link');

    console.log('Navbar links found:', navLinks.length); // Debug: Check if links are found

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump behavior

            console.log('Link clicked:', link.getAttribute('href')); // Debug: Confirm click

            // Get the target section ID from the href (e.g., "#education")
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate the offset for the sticky navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight || 0;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

                // Use custom smooth scroll
                smoothScroll(targetPosition, 1000); // 1000ms duration

                // Close the mobile menu after clicking a link
                const navbarLinks = document.querySelector('.navbar-links');
                const navbarToggle = document.querySelector('.navbar-toggle');
                if (navbarLinks.classList.contains('active')) {
                    navbarLinks.classList.remove('active');
                    navbarToggle.classList.remove('active');
                }
            } else {
                console.log('Target section not found:', targetId); // Debug: If section is missing
            }
        });
    });
});