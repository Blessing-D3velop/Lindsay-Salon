const productsData = [
  {
    name: "Red Unicorn Hairpiece",
    price: 60,
    shinyPrice: 65,
    stock: "in",
    images: [
      "images-icons/Images/Hairpieces/red.jpg",
      "images-icons/Images/Hairpieces/red2.jpg",
    ]
  },
  {
    name: "Black Unicorn Hairpiece",
    price: 60,
    shinyPrice: 65,
    stock: "out",
    images: [
      "images-icons/Images/Hairpieces/black.jpg",
      "images-icons/Images/Hairpieces/black2.jpg",
    ]
  },
  {
    name: "Light Green Unicorn Hairpiece",
    price: 60,
    shinyPrice: 65,
    stock: "low",
    images: [
      "images-icons/Images/Hairpieces/light-green.jpg",
      "images-icons/Images/Hairpieces/light-green2.jpg",
    ]
  },
  {
    name: "White Unicorn Hairpiece",
    price: 60,
    shinyPrice: 65,
    stock: "in",
    images: [
      "images-icons/Images/Hairpieces/white.jpg",
      "images-icons/Images/Hairpieces/white2.jpg",
    ]
  },
];

const container = document.querySelector(".js-product-container");

let renderProducts = () => {
  container.innerHTML = "";

  productsData.forEach((product, index) => {

    let stockText = "";
    let stockClass = "";
    let disabledBtn = "";

    if (product.stock === "in") {
      stockText = "In Stock";
      stockClass = "in-stock";
    } else if (product.stock === "out") {
      stockText = "Out of Stock";
      stockClass = "out-stock";
      disabledBtn = "disabled";
    } else {
      stockText = "Low Stock";
      stockClass = "low-stock";
    }

    let html = `
      <div class="product-card" data-index="${index}">
        <div class="image-wrapper">
          <button class="prev-btn">◀</button>

          <img src="${product.images[0]}" class="product-image" data-current="0">

          <button class="next-btn">▶</button>
        </div>

        <div class="product-info">
          <p class="product-name">${product.name}</p>

          <p class="availability ${stockClass}">${stockText}</p>

          <div class="price">
            <span class="normal">R${product.price}</span>
            <span class="shiny">Shiny: R${product.shinyPrice}</span>
          </div>

          <select class="quantity">
            <option value="1">Qty: 1</option>
            <option value="2">Qty: 2</option>
            <option value="3">Qty: 3</option>
            <option value="4">Qty: 4</option>
            <option value="5">Qty: 5</option>
          </select>

          <button class="add-to-cart" ${disabledBtn}>
            ${product.stock === "out" ? "Sold Out" : "Add to Cart 🛒"}
          </button>
        </div>
      </div>
    `;

    container.innerHTML += html;
  });
};

renderProducts();

/* IMAGE SLIDER */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const index = card.dataset.index;
  const img = card.querySelector(".product-image");

  let current = Number(img.dataset.current);

  if (e.target.classList.contains("next-btn")) {
    current = (current + 1) % productsData[index].images.length;
  }

  if (e.target.classList.contains("prev-btn")) {
    current = (current - 1 + productsData[index].images.length) % productsData[index].images.length;
  }

  img.src = productsData[index].images[current];
  img.dataset.current = current;
});