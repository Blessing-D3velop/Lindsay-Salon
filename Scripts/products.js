const productsData = [
  {
    name: "Red Sparkle Braid",
    price: 60,
    shinyPrice: 65,
    stock: "in",
    images: [
      "images-icons/Images/Hairpieces/red.jpg",
      "images-icons/Images/Hairpieces/red2.jpg",
    ]
  },
  {
    name: "Black Sparkle Braid",
    price: 60,
    shinyPrice: 65,
    stock: "out",
    images: [
      "images-icons/Images/Hairpieces/black.jpg",
      "images-icons/Images/Hairpieces/black2.jpg",
    ]
  },
  {
    name: "Light Green Sparkle Braid",
    price: 60,
    shinyPrice: 65,
    stock: "low",
    images: [
      "images-icons/Images/Hairpieces/light-green.jpg",
      "images-icons/Images/Hairpieces/light-green2.jpg",
    ]
  },
  {
    name: "White Sparkle Braid",
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

/* ===================== */
/* CART (LOCAL STORAGE)  */
/* ===================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ALERT */
function showAlert(message){
  const div = document.createElement("div");
  div.className = "cart-alert";
  div.innerText = message;

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1500);
}

/* ===================== */
/* RENDER PRODUCTS       */
/* ===================== */

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
            <span class="shiny">Sparkle: R${product.shinyPrice}</span>
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

/* ===================== */
/* IMAGE SLIDER          */
/* ===================== */

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

/* ===================== */
/* ADD TO CART           */
/* ===================== */

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("add-to-cart")) {

    const card = e.target.closest(".product-card");
    const index = card.dataset.index;

    const product = productsData[index];
    const qty = Number(card.querySelector(".quantity").value);

    const existing = cart.find(item => item.name === product.name);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        name: product.name,
        price: product.price,
        img: product.images[0],
        qty: qty
      });
    }

    saveCart();
    updateCartUI();
    showAlert("Added to cart ✔");
  }

  /* CLEAR CART */
  if (e.target.classList.contains("js-clear-cart")) {
    cart = [];
    saveCart();
    updateCartUI();
    showAlert("Cart cleared 🧹");
  }
});

/* ===================== */
/* UPDATE CART UI        */
/* ===================== */

function updateCartUI(){

  const cartContainer = document.querySelector(".js-cart-items");
  const totalEl = document.querySelector(".cart-total");
  const cartQty = document.querySelector(".cart-quantity");

  cartContainer.innerHTML = "";

  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {

    total += item.price * item.qty;
    totalQty += item.qty;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div class="cart-item-info">
          <p>${item.name}</p>
          <p>R${item.price} x ${item.qty}</p>
        </div>
      </div>
    `;
  });

  totalEl.innerText = `Total: R${total}`;
  cartQty.innerText = totalQty;

  saveCart();
}

/* INIT CART UI ON LOAD */
updateCartUI();

/* ===================== */
/* CART OPEN / CLOSE     */
/* ===================== */

const cartIcon = document.querySelector(".js-cart");
const cartPanel = document.querySelector(".js-cart-panel");
const closeCart = document.querySelector(".close-cart");

cartIcon.addEventListener("click", () => {
  cartPanel.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("active");
});

/* ===================== */
/* PLACE ORDER           */
/* ===================== */

document.querySelector(".place-order").addEventListener("click", () => {

  if(cart.length === 0) return;

  let message = "Hi, I want to place an order:\n\n";

  cart.forEach(item => {
    message += `${item.name}\nR${item.price} x ${item.qty}\n\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  message += `Total: R${total}`;

  const url = `https://wa.me/27618602648?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

  /* CLEAR AFTER ORDER */
  cart = [];
  saveCart();
  updateCartUI();
  showAlert("Order sent ✔");
});