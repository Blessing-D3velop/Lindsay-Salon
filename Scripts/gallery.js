import { galleryData } from "./data/gallery-data.js";

const galleryContainer = document.querySelector('.js-gallery-container');

const renderGallery = (galleryData) => {
  let galleryHTML = '';

  galleryData.forEach((galleryImage) => {
    galleryHTML += `
      <img src="${galleryImage.img}" alt="Gallery Image" class="gallery-image"/>
    `;
  });

  galleryContainer.innerHTML = galleryHTML;
};

renderGallery(galleryData);const modal = document.querySelector(".js-image-modal");
const modalImg = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close-modal");

// OPEN IMAGE
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("gallery-image")){
    modal.classList.add("active");
    modalImg.src = e.target.src;
  }
});

// CLOSE IMAGE (X button)
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// CLOSE WHEN CLICK OUTSIDE IMAGE
modal.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});