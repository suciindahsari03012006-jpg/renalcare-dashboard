// chat-pasien-script.js

document.addEventListener("DOMContentLoaded", () => {

    const quickButtons = document.querySelectorAll(".quick-action button");

    quickButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);

        });

    });

});