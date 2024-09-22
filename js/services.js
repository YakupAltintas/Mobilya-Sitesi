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

const services = [
  {
    title: "Özel Tasarım Çocuk Odaları",
    description:
      "Çocukların hayal gücünü yansıtan mobilyalar, alanınıza özel olarak tasarlanır.",
    image: "asset/ErkekCocukOdasi.jpg",
  },
  {
    title: "Yatak Odası Tasarımları",
    description:
      "Kişisel zevkinizi yansıtan mobilyalar, alanınıza özel olarak tasarlanır.",
    image: "asset/mobilya.jpg",
  },
  {
    title: "Misafir Odası Tasarımları",
    description:
      "En iyi malzemeler ve ustalıkla yapılmış, çağdaş iç tasarım çözümleri.",
    image: "asset/H_IcMekan.jpg",
  },
  {
    title: "Genç Odası Tasarımları",
    description:
      "Alanınızı en verimli şekilde kullanmak için profesyonel mekan planlama hizmetleri.",
    image: "asset/KizCocukOdasi.jpg",
  },
  {
    title: "Modern Mutfak Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Giyisi Dolapları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Tv Üniteleri",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Hol Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Wc Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Banyo Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Yemek Masası Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Koltuk Sandalye Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
  {
    title: "Kapı Tasarımları",
    description:
      "Deneyimli ekibimizden alanınıza ve ihtiyaçlarınıza yönelik uzman önerileri.",
    image: "asset/modernmutfak.jpg",
  },
];

const servicesSection = document.getElementById("services-section");
services.forEach((service) => {
  const serviceBox = document.createElement("div");
  serviceBox.className = "service-box";
  serviceBox.innerHTML = `
        <img src="${service.image}" alt="${service.title}" />
        <h2>${service.title}</h2>
        <p>${service.description}</p>
    `;
  servicesSection.appendChild(serviceBox);
});
