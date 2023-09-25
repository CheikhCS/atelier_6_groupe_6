document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nomInput = document.getElementById("nom");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        let valid = true;

        if (nomInput.value.trim() === "") {
            valid = false;
            alert("Veuillez entrer votre nom.");
        }

        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value.trim())) {
            valid = false;
            alert("Veuillez entrer une adresse e-mail valide.");
        }

        if (messageInput.value.trim() === "") {
            valid = false;
            alert("Veuillez entrer un message.");
        }

        if (!valid) {
            event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes.
        }
    });

    function isValidEmail(email) {
        // Une simple validation d'adresse e-mail. Vous pouvez utiliser une validation plus robuste selon vos besoins.
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});
