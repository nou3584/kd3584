const loader = document.getElementById("loader");
const header = document.getElementById("header");
const navButton = document.getElementById("navButton");
const nav = document.getElementById("nav");
const gate = document.getElementById("letterGate");
const toast = document.getElementById("toast");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader?.classList.add("hide");
  }, 450);
});

document.querySelectorAll("[data-action]").forEach((item) => {
  item.addEventListener("click", () => {
    const action = item.dataset.action;

    if (action === "enter") {
      const url = item.dataset.url || "kingdom.html";
      moveLetterToLight(url);
      return;
    }

    if (action === "later") {
      showToast("この項目は後日実装予定です。");
    }
  });
});

function moveLetterToLight(url) {
  if (!gate) {
    window.location.href = url;
    return;
  }

  gate.classList.add("to-light");

  setTimeout(() => {
    gate.classList.add("hide");
  }, 900);

  setTimeout(() => {
    window.location.href = url;
  }, 1180);
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
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

if (revealItems.length > 0) {
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
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
