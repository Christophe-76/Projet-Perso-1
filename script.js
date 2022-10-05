const message =
  "Thank you for submitting your request. The crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

const envoyer =
  "Vous avez envoyé un message";

Envoi
  .getElementById("formUploadInput")
  .addEventListener("File", function (event) {
    event.preventDefault();
    alert(message);
  });
