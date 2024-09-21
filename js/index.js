document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  // Menü Toggle
  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
  });
});

// Menü dışına tıklandığında kapatma
document.addEventListener("click", function (event) {
  if (
    !navbarMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    navbarMenu.classList.remove("active");
  }
});
