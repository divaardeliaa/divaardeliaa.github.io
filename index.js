const heroImage = document.querySelector("[data-hero-image]");
const portraitButtons = document.querySelectorAll("[data-image]");
const portraitCarousel = document.querySelector(".hero__visual");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const educationCards = document.querySelectorAll(".education-card");
const yearTarget = document.querySelector("[data-current-year]");
let portraitTimer;

function showPortrait(button) {
  if (!heroImage || button.classList.contains("is-active")) return;

  heroImage.classList.add("is-changing");
  window.setTimeout(() => {
    heroImage.src = button.dataset.image;
    heroImage.alt = button.dataset.alt;
    heroImage.style.setProperty("--portrait-scale", button.dataset.portraitScale);
    heroImage.style.setProperty("--portrait-offset", button.dataset.portraitOffset);
    heroImage.classList.remove("is-changing");
  }, 260);

  portraitButtons.forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
}

function stopPortraitAutoplay() {
  window.clearInterval(portraitTimer);
}

function startPortraitAutoplay() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (portraitButtons.length < 2 || prefersReducedMotion || document.hidden) return;

  stopPortraitAutoplay();
  portraitTimer = window.setInterval(() => {
    const activeIndex = Array.from(portraitButtons).findIndex((button) => button.classList.contains("is-active"));
    const nextIndex = (activeIndex + 1) % portraitButtons.length;
    showPortrait(portraitButtons[nextIndex]);
  }, 2500);
}

portraitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPortrait(button);
    startPortraitAutoplay();
  });
});

portraitCarousel?.addEventListener("pointerenter", stopPortraitAutoplay);
portraitCarousel?.addEventListener("pointerleave", startPortraitAutoplay);
portraitCarousel?.addEventListener("focusin", stopPortraitAutoplay);
portraitCarousel?.addEventListener("focusout", startPortraitAutoplay);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopPortraitAutoplay();
  else startPortraitAutoplay();
});
startPortraitAutoplay();

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

educationCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isFlipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(isFlipped));
  });
});

const educationSlideshows = document.querySelectorAll("[data-education-slideshow]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

educationSlideshows.forEach((slideshow) => {
  const slides = slideshow.querySelectorAll("img");
  let activeIndex = 0;

  if (slides.length < 2 || prefersReducedMotion) return;

  window.setInterval(() => {
    if (document.hidden) return;
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 3500);
});

if (yearTarget) yearTarget.textContent = new Date().getFullYear();

const toolkitSkills = {
  data: "SQL · Python · Power BI · Pentaho · ETL · Data Cleaning",
  systems: "PostgreSQL · DBeaver · ERD · Functional Testing · Technical Writing",
  collaboration: "Power Apps · Microsoft Lists · Project Coordination · Content Strategy",
};
const toolkitOutput = document.querySelector("[data-toolkit-output]");
const toolkitTabs = document.querySelectorAll("[data-toolkit-tab]");

toolkitTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    toolkitTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    toolkitOutput.textContent = toolkitSkills[tab.dataset.toolkitTab];
  });
});

const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-category]");

projectFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selectedCategory = filter.dataset.projectFilter;
    projectFilters.forEach((item) => item.classList.remove("is-active"));
    filter.classList.add("is-active");
    projectCards.forEach((card) => {
      card.hidden = selectedCategory !== "all" && card.dataset.projectCategory !== selectedCategory;
    });
  });
});
