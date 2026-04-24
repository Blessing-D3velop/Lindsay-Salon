import { nailsData } from "./data/nails-data.js";

const nailsContainer = document.querySelector('.js-nail-container');

let renderNails = (nailsData) =>{
  nailsContainer.innerHTML='';
  nailsData.forEach((nail) => {
    let html = `
    <div class="nail-card">
      <div class="nail-image-container">
      <img src="${nail.img}" alt="nail-image"/>
      </div>
      <div class="nail-info">
        <div class="nail-name-price">
        <p class="nail-name">${nail.name}</p>
        <p class="nail-price">R${nail.price}</P>
        </div>
        <p class="nail-description">
          ${nail.description}
        </p>
        <button class="Book-now">Book Now</button>
      </div>
    </div>
    `;
    nailsContainer.innerHTML += html;
  })
}
renderNails(nailsData)

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("Book-now")) {

    const card = e.target.closest(".nail-card");

    const name = card.querySelector(".nail-name").innerText;
    const price = card.querySelector(".nail-price").innerText;

    const message = `Hi, I would like to book a nail service:\n\n${name}\nPrice: ${price}`;

    const whatsappURL = `https://wa.me/27618602648?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  }

});