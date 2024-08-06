document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail() {
        if (!email.value.match(emailRegex)) {
            emailError.textContent = "Veuillez entrer un email valide.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validatePassword() {
        if (password.value.length < 6) {
            passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
            return false;
        }
        passwordError.textContent = "";
        return true;
    }

    function validateConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
            return false;
        }
        confirmPasswordError.textContent = "";
        return true;
    }

    email.addEventListener("input", validateEmail);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert("Inscription réussie!");
            form.reset();
        }
    });
});
