const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});