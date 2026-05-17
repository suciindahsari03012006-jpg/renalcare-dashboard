// content-management-script.js

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".stat-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});
