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
