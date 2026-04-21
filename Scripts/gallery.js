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

renderGallery(galleryData);