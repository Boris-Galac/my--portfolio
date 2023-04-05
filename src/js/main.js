///// TYPING EFFECT

if (document.querySelector(".home-main")) {
  var typed = new Typed(".auto-type", {
    strings: ["UX/UI designer", "Web developer", "Graphic designer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
  });
}

////// SCROLL TO TOP

window.addEventListener("scroll", (e) => {
  const scroollBtn = document.querySelector(".scroll-to-top-btn");
  if (window.scrollY > 100) scroollBtn.setAttribute("aria-hidden", "false");
  else scroollBtn.setAttribute("aria-hidden", "true");
  scroollBtn.addEventListener("click", (e) => {
    window.scroll({
      top: 0,
    });
  });
});

/////// OVERLAY

const searchBtn = document.querySelector(".top-bar__search");
const searchForm = document.querySelector(".search__form");
const overlay = document.querySelector(".overlay");

searchBtn.addEventListener("click", (e) => {
  if (overlay.getAttribute("aria-hidden") === "true") {
    overlay.setAttribute("aria-hidden", "false");
  }
  searchForm.setAttribute("aria-hidden", "false");
});

overlay.addEventListener("click", (e) => {
  overlay.setAttribute("aria-hidden", "true");
  searchForm.setAttribute("aria-hidden", "true");
});
