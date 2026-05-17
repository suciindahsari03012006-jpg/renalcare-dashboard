// TOGGLE PASSWORD

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

  const type =
    password.getAttribute("type") === "password"
      ? "text"
      : "password";

  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");

});

// ROLE ACTIVE

const roleButtons = document.querySelectorAll(".role-btn");

roleButtons.forEach(button => {

  button.addEventListener("click", () => {

    roleButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

  });

});
