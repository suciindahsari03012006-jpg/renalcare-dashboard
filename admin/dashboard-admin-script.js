// dashboard-admin-script.js

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".stat-card, .chart-card, .status-card, .table-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-4px)";
            card.style.transition = "0.3s";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

});
