// Service Modal ve Navigation İşlevleri
const serviceBoxes = document.querySelectorAll(".service-box");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const close = document.getElementById("close");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

const services = [
  {
    image: "asset/ErkekCocukOdasi.jpg",
    title: "Hizmet 1",
    description: "Hizmet 1 detaylı açıklaması.",
  },
  {
    image: "asset/KizCocukOdasi.jpg",
    title: "Hizmet 2",
    description: "Hizmet 2 detaylı açıklaması.",
  },
  {
    image: "asset/H_danismanlik.jpg",
    title: "Hizmet 3",
    description: "Hizmet 3 detaylı açıklaması.",
  },
  {
    image: "asset/modernmutfak.jpg",
    title: "Hizmet 4",
    description: "Hizmet 4 detaylı açıklaması.",
  },
  {
    image: "asset/modernmutfak.jpg",
    title: "Hizmet 5",
    description: "Hizmet 5 detaylı açıklaması.",
  },
  {
    image: "asset/modernmutfak.jpg",
    title: "Hizmet 6",
    description: "Hizmet 6 detaylı açıklaması.",
  },
];

// Modal başlangıçta gizli
modal.style.display = "none";

// Kutulara tıklama ile modal açılması
serviceBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    currentIndex = index; // Tıklanan kutunun indeksini ayarla
    openModal(currentIndex);
  });
});

// Modalı açma fonksiyonu
function openModal(index) {
  modalImage.src = services[index].image;
  modalTitle.innerText = services[index].title;
  modalDescription.innerText = services[index].description;
  modal.style.display = "flex"; // Modalı göster
}

// Modal kapama butonu
close.addEventListener("click", () => {
  modal.style.display = "none"; // Modalı kapat
});

// Önceki buton
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
  openModal(currentIndex); // Önceki hizmete geç
});

// Sonraki buton
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
  openModal(currentIndex); // Sonraki hizmete geç
});

// Pencere dışında tıklandığında modalı kapatma
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Modalı kapat
  }
});

// Menü açma/kapatma
const menuToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
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

// Klavye ile modal navigasyonu
document.addEventListener("keydown", function (event) {
  if (modal.style.display === "flex") {
    // Modal açık olduğunda
    if (event.key === "ArrowLeft") {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
      openModal(currentIndex); // Klavye ile önceki hizmete geç
    } else if (event.key === "ArrowRight") {
      currentIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
      openModal(currentIndex); // Klavye ile sonraki hizmete geç
    } else if (event.key === "Escape") {
      modal.style.display = "none"; // Klavye ile modalı kapat (Escape tuşu)
    }
  }
});
