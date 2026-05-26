const loader = document.getElementById("loader");
const header = document.getElementById("header");
const navButton = document.getElementById("navButton");
const nav = document.getElementById("nav");
const gate = document.getElementById("letterGate");
const languageSwitch = document.getElementById("languageSwitch");

let currentLang = localStorage.getItem("kd3584_lang") || "ja";

document.body.classList.add("gate-open");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader?.classList.add("hide");
  }, 450);

  applyLanguage(currentLang);
});

document.querySelectorAll(".lang-choice").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.lang || "ja";
    currentLang = selectedLang;
    localStorage.setItem("kd3584_lang", selectedLang);
    applyLanguage(selectedLang);

    gate?.classList.add("hide");
    document.body.classList.remove("gate-open");

    setTimeout(() => {
      gate?.remove();
    }, 900);
  });
});

languageSwitch?.addEventListener("click", () => {
  currentLang = currentLang === "ja" ? "en" : "ja";
  localStorage.setItem("kd3584_lang", currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  document.documentElement.lang = lang === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-ja][data-en]").forEach((element) => {
    const text = element.dataset[lang];
    if (text) {
      element.textContent = text;
    }
  });

  if (languageSwitch) {
    languageSwitch.textContent = lang === "ja" ? "EN" : "JP";
  }
}

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 40);
});

navButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navButton.classList.toggle("open", isOpen);
  document.body.classList.toggle("no-scroll", isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navButton.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 50, 250)}ms`;
  observer.observe(item);
});

document.getElementById("year").textContent = new Date().getFullYear();
