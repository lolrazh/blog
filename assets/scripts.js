document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        // Add touchstart event for mobile devices
        card.addEventListener('touchstart', function() {
            card.classList.add('hovered');
        });

        // Remove the hover effect after a short delay to simulate the hover effect
        card.addEventListener('touchend', function() {
            setTimeout(function() {
                card.classList.remove('hovered');
            }, 500); // Adjust the duration to match the CSS transition time
        });
    });
});
