document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("active"); // Menüye 'active' sınıfını ekleyip çıkarır
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

let lastScrollTop = 0; // Son kaydırma pozisyonunu saklamak için
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Kullanıcı aşağı kaydırıyor
    navbar.classList.add("hidden");
  } else {
    // Kullanıcı yukarı kaydırıyor
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop; // Son kaydırma pozisyonunu güncelle
});
