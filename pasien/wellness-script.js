// wellness-script.js

document.addEventListener("DOMContentLoaded", () => {

    // Hover animation card
    const cards = document.querySelectorAll(
        ".imt-card, .menu-card, .life-card, .weight-card, .analysis-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0px)";
        });

    });

    // Button interaction
    const button = document.querySelector(".btn-primary");

    if(button){

        button.addEventListener("click", () => {

            const tinggi = document.querySelectorAll(".form-control")[0].value;
            const berat = document.querySelectorAll(".form-control")[1].value;

            if(tinggi && berat){

                alert("Perhitungan IMT berhasil diproses!");

            }else{

                alert("Mohon isi data terlebih dahulu.");

            }

        });

    }

});