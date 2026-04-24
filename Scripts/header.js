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

/* GALLERY */
document.querySelectorAll('.js-gallery')
  .forEach(link => {
    link.addEventListener('click', () => {
      const gallerySection = document.getElementById('gallery-section-id');
      gallerySection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });

/* NAILS */
document.querySelectorAll('.js-beauty')
  .forEach(link => {
    link.addEventListener('click', () => {
      const nailSection = document.getElementById('nail-section-id');
      nailSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });

document.querySelectorAll('.js-products')
  .forEach(link => {
    link.addEventListener('click', () => {
      const productsSection = document.getElementById('products-section-id');
      productsSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });

document.querySelectorAll('.js-prices')
  .forEach(link => {
    link.addEventListener('click', () => {
      const priceSection = document.getElementById('hairstyles-section');
      priceSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });

  document.querySelectorAll('.js-contact')
  .forEach(link => {
    link.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove("active");
    });
  });