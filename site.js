document.documentElement.classList.add("has-js");

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
const mobileQuery = window.matchMedia("(max-width: 900px)");

if (header && toggle && nav) {
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    nav.hidden = mobileQuery.matches ? !open : false;
  };

  const syncNav = () => {
    if (mobileQuery.matches) {
      if (!header.classList.contains("is-open")) {
        nav.hidden = true;
      }
    } else {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      nav.hidden = false;
    }
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileQuery.matches) {
        setOpen(false);
      }
    });
  });

  mobileQuery.addEventListener("change", syncNav);
  syncNav();
}
