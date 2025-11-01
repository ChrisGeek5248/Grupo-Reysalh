// Cargar fragmentos HTML de header y footer dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  // Cargar header
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Cargar footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
