// mobile-dashboard-script.js

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".mobile-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-4px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});
