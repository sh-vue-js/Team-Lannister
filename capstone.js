const hamburger = document.getElementById("hamburger");
const topNav = document.getElementById("top-nav");
hamburger.addEventListener("click", () => {
  topNav.classList.toggle("show");
});
