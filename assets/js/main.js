/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});


/*=============== SHADOW HEADER ===============*/
const header = document.getElementById("header");

function shadowHeader() {
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
}

window.addEventListener("scroll", shadowHeader);


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme)
    ? "dark"
    : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-sun-line"
    : "ri-moon-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
    iconTheme
  );
}


/* Theme button */
if (themeButton) {
  themeButton.addEventListener("click", () => {

    document.body.classList.toggle(darkTheme);

    themeButton.classList.toggle(iconTheme);

    localStorage.setItem(
      "selected-theme",
      getCurrentTheme()
    );

    localStorage.setItem(
      "selected-icon",
      getCurrentIcon()
    );

  });
}


/*=============== SCROLL UP ===============*/
const scrollUp = document.getElementById("scroll-up");

function showScrollUp() {

  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }

}

window.addEventListener("scroll", showScrollUp);


/*=============== ACTIVE NAVIGATION ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {

  const scrollY = window.scrollY;

  sections.forEach(section => {

    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    const link = document.querySelector(
      `.nav__link[href*="${sectionId}"]`
    );

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {

      document
        .querySelectorAll(".nav__link")
        .forEach(nav => nav.classList.remove("active-link"));

      if (link) {
        link.classList.add("active-link");
      }
    }

  });

}

window.addEventListener("scroll", scrollActive);


/*=============== SCROLLREVEAL ===============*/
if (typeof ScrollReveal !== "undefined") {

  const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 200,
    reset: false
  });

  sr.reveal(".home__content", {
    origin: "left"
  });

  sr.reveal(".home__image", {
    origin: "right"
  });

  sr.reveal(".about__image", {
    origin: "left"
  });

  sr.reveal(".about__content", {
    origin: "right"
  });

  sr.reveal(".skills__card", {
    interval: 100
  });

  sr.reveal(".experience__card", {
    origin: "bottom"
  });

  sr.reveal(".projects__card", {
    interval: 150
  });

  sr.reveal(".education__item", {
    interval: 100
  });

  sr.reveal(".contact__content", {
    origin: "left"
  });

  sr.reveal(".contact__form-wrapper", {
    origin: "right"
  });

}


/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    contactMessage.textContent =
      "Message form is ready. EmailJS can be connected next.";

    contactForm.reset();

  });

}
