var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#header-nav-bar"),
  CShamburgerMenu = document.querySelector("#header-nav-bar .toggle");
function ariaExpanded() {
  let e = document.querySelector("#nav-bar-ul-expanded");
  "false" === e.getAttribute("aria-expanded")
    ? e.setAttribute("aria-expanded", "true")
    : e.setAttribute("aria-expanded", "false");
}
CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("active-link"),
    CSnavbarMenu.classList.toggle("active-link"),
    CSbody.classList.toggle("cs-open"),
    ariaExpanded();
}),
  document.addEventListener("DOMContentLoaded", (e) => {
    document.documentElement.scrollTop >= 100
      ? document.querySelector("body").classList.add("scroll")
      : document.querySelector("body").classList.remove("scroll");
  }),
  document.addEventListener("scroll", (e) => {
    document.documentElement.scrollTop >= 100
      ? document.querySelector("body").classList.add("scroll")
      : document.querySelector("body").classList.remove("scroll");
  });
const dropDowns = Array.from(
  document.querySelectorAll("#header-nav-bar .cs-dropdown")
);
for (const item of dropDowns) {
  let e = () => {
    item.classList.toggle("active-link");
  };
  item.addEventListener("click", e);
}
const faqItems = Array.from(document.querySelectorAll(".faq-question-card"));
for (const item of faqItems) {
  let t = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", t);
}
const hiddenElements = document.querySelectorAll(".hidden"),
  observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      e.isIntersecting && e.target.classList.add("show");
    });
  });
hiddenElements.forEach((e) => observer.observe(e));
const picButton = document.querySelectorAll(".pic-button");
function button(e) {
  e.addEventListener("click", () => {
    let t = Array.from(e.parentNode.children).indexOf(e);
    switch (t) {
      case 0:
        window.location.href = "recipes/recipe1";
        break;
      case 1:
        window.location.href = "recipes/recipe2";
        break;
      case 2:
        window.location.href = "recipes/recipe3";
        break;
      case 3:
        window.location.href = "recipes/recipe4";
        break;
      case 4:
        window.location.href = "recipes/recipe5";
    }
  });
}
picButton.forEach(button);

const selectLanguage = document.querySelector("#language-svg-container"),
  languageOptions = document.querySelector(".unrevealed");
selectLanguage.addEventListener("click", () => {
  languageOptions.classList.toggle("visible");
});
const cookieEn = document.querySelector(".cookieEn"),
  cookieGr = document.querySelector(".cookieGr");
cookieEn.addEventListener("click", () => {
  let e = JSON.stringify(window.location.pathname).replace("gr", "en");
  Cookies.set("english", "en", { expires: 30 }),
    Cookies.remove("greek"),
    (window.location.href = JSON.parse(e));
}),
  cookieGr.addEventListener("click", () => {
    let e = JSON.stringify(window.location.pathname).replace("en", "gr");
    Cookies.set("greek", "gr", { expires: 30 }),
      Cookies.remove("english"),
      (window.location.href = JSON.parse(e));
  });