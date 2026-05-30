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

document.querySelectorAll("[data-project-gallery]").forEach((gallery) => {
  const slug = gallery.dataset.projectGallery;
  const title = gallery.dataset.projectTitle;
  const count = Number.parseInt(gallery.dataset.projectCount, 10);
  const track = gallery.querySelector("[data-gallery-track]");
  const previous = gallery.querySelector("[data-gallery-previous]");
  const next = gallery.querySelector("[data-gallery-next]");

  if (!slug || !title || !count || !track || !previous || !next) {
    return;
  }

  const formatter = new Intl.NumberFormat("it-IT", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  for (let index = 1; index <= count; index += 1) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    const number = formatter.format(index);

    figure.className = "project-photo";
    image.src = `assets/project-highlights/${slug}/${slug}-${number}.jpg`;
    image.alt = `${title}, foto ${index} di ${count}.`;
    image.loading = index === 1 ? "eager" : "lazy";
    image.decoding = "async";
    caption.textContent = `${index} / ${count}`;

    figure.append(image, caption);
    track.append(figure);
  }

  const scrollGallery = (direction) => {
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.86, 720),
      behavior: "smooth",
    });
  };

  previous.addEventListener("click", () => scrollGallery(-1));
  next.addEventListener("click", () => scrollGallery(1));
});
