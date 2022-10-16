const message =
  "Thank you for submitting your request. The crew will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

const envoyer =
  "Vous avez envoyé un document";
document
  .getElementById("formUploadInput")
  .addEventListener("File", function (event) {
    event.preventDefault();
    alert(envoyer);
  });
  

  
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
