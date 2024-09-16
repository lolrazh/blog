document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        // Desktop users can still use the normal hover
        card.addEventListener('touchstart', function() {
            card.classList.add('hovered');
        });

        // Remove the hover effect after a short delay to simulate the hover effect on mobile
        card.addEventListener('touchend', function() {
            setTimeout(function() {
                card.classList.remove('hovered');
            }, 500); // Adjust the duration to match the CSS transition time
        });
    });
});
