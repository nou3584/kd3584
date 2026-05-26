const loader = document.getElementById("loader");
const header = document.getElementById("header");
const navButton = document.getElementById("navButton");
const nav = document.getElementById("nav");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader?.classList.add("hide");
  }, 450);
});

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
