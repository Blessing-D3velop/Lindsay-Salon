import { hairstylesData } from "./data/hairstyles-data.js";

const grid = document.querySelector(".js-hairstyles-grid");
const buttons = document.querySelectorAll(".category-container button");

function renderStyles(filter = "all"){
  grid.innerHTML = "";

  hairstylesData.forEach(style => {
    if(filter === "all" || style.category === filter){
      const html = `
        <div class="style-card">
          <p class="style-name">${style.name}</p>
          <p class="style-price">${style.price}</p>
          <button class="book-btn">Book Now</button>
        </div>
      `;
      grid.innerHTML += html;
    }
  });
}

renderStyles("needle");

// BUTTON FILTER
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {

    let categories = [
      "needle",
      "freehand",
      "box",
      "tribal",
      "cornrows",
      "piggy",
      "protective",
      "care"
    ];

    renderStyles(categories[index]);

  });
});

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("book-btn")) {

    const card = e.target.closest(".style-card");

    const name = card.querySelector(".style-name").innerText;
    const price = card.querySelector(".style-price").innerText;

    const message = `Hi, I would like to book:\n\n${name}\nPrice: ${price}`;

    const whatsappURL = `https://wa.me/27618602648?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  }

});