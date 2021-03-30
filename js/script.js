// TO BE CONTINUED - DOES NOT WORK
let controller;
let slideScene;

function animateSlides(){
  // Init Controller
  controller = new ScrollMagic.Controller();
  // Select Some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  // Loop each slide
  sliders.forEach(slide => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    // GSAP
    const sliderTimeline = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut"}
    });
    slideTl.fromTo(revealImg, { x: "0%"}, { x: "100%" });
    slideTl.fromTo(img, { scale: 2}, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%"}, { x: "100%" }, "-=0.75");
    slideTl.fromTo(nav, { y:"-100%"}, { y: "0%" },"-=0.5");
    
  })}
  // --------------------
// Navigation Animation
const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const burger = document.querySelector(".burger");
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

// Cursor Animation - when the cursor hovers over a specific button, a new class will be applied.
function activeCursor(e) {
  const item = e.target;
  if (item.id === "logo" || item.classList.contains("burger")) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }
  if (item.classList.contains("button")) {
    mouse.classList.add("explore-active");
    gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "click";
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
    gsap.to(".title-swipe", 1, { y: "100%" });
  }
}
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    // Creates the X in the burger menu
    gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "#232323" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "#232323" });
    gsap.to("#logo", 1, { color: "#232323" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.body.classList.add("hide");
  } else {
    // When you click on the X to class nav bar - it returns everything back to normal
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "#FF4E00" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "#FF4E00" });
    gsap.to("#logo", 1, { color: "#232323" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
