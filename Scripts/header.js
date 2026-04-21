const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

/* HOME */
document.querySelectorAll('.js-home')
  .forEach(link => {
    link.addEventListener('click', () => {
      const homeSection = document.getElementById('home-section-id');
      homeSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });

/* ABOUT */
document.querySelectorAll('.js-about')
  .forEach(link => {
    link.addEventListener('click', () => {
      const aboutSection = document.getElementById('about-section-id');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });