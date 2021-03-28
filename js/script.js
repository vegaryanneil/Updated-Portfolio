const exploreButton = document.querySelector(".mountain-exp");

window.addEventListener("scroll", scrollReveal);

function scrollReveal() {
  const hikePos = exploreButton.getBoundingClientRect().top;
  console.log(hikePos);
  if(hikePos < 0) {
    exploreButton.style.color = "red"
  }

}