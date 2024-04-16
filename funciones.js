document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las imágenes dentro de hover-container
  var images = document.querySelectorAll(".hover-container img");

  // Añade un evento click a cada imagen
  images.forEach(function (image) {
    image.addEventListener("click", function (event) {
      event.stopPropagation(); // Evita que el evento de clic se propague al contenedor

      // Agrega la clase 'expanded' a la imagen actual
      this.classList.toggle("expanded");

      // Muestra el botón de volver cuando se amplíe la imagen
      document.getElementById("volver").style.display = "block";
    });
  });

  // Añade un evento click al botón de volver para restablecer la imagen a su tamaño original
  document.getElementById("volver").addEventListener("click", function () {
    // Selecciona todas las imágenes expandidas
    var expandedImages = document.querySelectorAll(
      ".hover-container img.expanded"
    );

    // Restablece el tamaño original de todas las imágenes expandidas
    expandedImages.forEach(function (expandedImage) {
      expandedImage.classList.remove("expanded");
    });

    // Oculta el botón de volver
    this.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const answer = this.nextElementSibling; // Obtén el elemento siguiente (la respuesta)

      // Alternar la clase 'active' para mostrar u ocultar la respuesta
      answer.classList.toggle("active");
    });
  });
});
