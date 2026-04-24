document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".work-image");
  const modal = document.querySelector(".js-image-modal");
  const modalImg = document.querySelector(".modal-image");
  const closeBtn = document.querySelector(".close-modal");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});