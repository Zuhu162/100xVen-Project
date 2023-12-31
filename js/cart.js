//Items in Cart
const cartItems = [];

//Add to Cart Button Function
const totalItems = document.getElementById("totalItems");

let totalCost = 0;

//Add item to Cart
const addToCart = () => {
  cartItems.push(selectedVariant);
  totalItems.textContent = cartItems.length;

  //Calculate total price
  totalCost = totalCost + selectedVariant.price;

  // Add modal
  showAddedModal();
  createCartItem();
};

// Dropdown
const dropDown = document.getElementById("cartDD");
const topbarContainer = document.getElementById("topbarContainer");
topbarContainer.appendChild(dropDown);

const showCart = () => {
  // Toggle the display of the dropdown
  dropDown.style.display === "none"
    ? (dropDown.style.display = "block")
    : (dropDown.style.display = "none");
};

//Create cart item element
const createCartItem = () => {
  const cartItem = document.createElement("div");
  cartItem.className = "cartItemContainer";

  const cartItemImg = document.createElement("img");
  cartItemImg.className = "cartItemImg";
  cartItemImg.src = cartItems[cartItems.length - 1].image1;

  const cartItemDets = document.createElement("div");
  cartItemDets.className = "cartItemDets";
  cartItemDets.textContent = `${cartItems[cartItems.length - 1].name} - 
  $${cartItems[cartItems.length - 1].price}`;

  //Increment Button;
  const incButton = document.createElement("button");
  incButton.className = "incDecButton";
  const incIcon = document.createElement("img");
  incIcon.className = "icon";
  incIcon.src = "../assets/icons/circle-plus-solid.svg";
  incButton.appendChild(incIcon);
  incButton.id = selectedVariant.id;
  incButton.onclick = () => {
    increment(incButton.id);
  };

  //Decrement Button
  const decButton = document.createElement("button");
  decButton.className = "incDecButton";

  const delIcon = document.createElement("img");
  delIcon.className = "icon";
  delIcon.src = "../assets/icons/trash-solid.svg";
  decButton.appendChild(delIcon);
  decButton.id = selectedVariant.id;
  decButton.onclick = () => {
    cartItem.remove();
    decrement(decButton.id);
  };

  cartItem.appendChild(cartItemImg);
  cartItem.appendChild(cartItemDets);
  cartItem.appendChild(incButton);
  cartItem.appendChild(decButton);

  dropDown.appendChild(cartItem);
};

//Increment Button Function
const increment = (id) => {
  const sel = cartItems.findIndex((item) => item.id == id);
  selectedVariant = cartItems[sel];
  addToCart();
};

const decrement = (id) => {
  const index = cartItems.findIndex((item) => item.id == id);
  cartItems.splice(index, 1);
  totalItems.textContent = cartItems.length;
};

//show modal
const showAddedModal = () => {
  const modal = document.createElement("div");
  modal.className = "addedToCartModal";
  modal.textContent = "Item successfully added to cart";
  const body = document.getElementById("topbarContainer");
  body.appendChild(modal);

  // Remove the modal after a specified duration
  const durationInSeconds = 2;
  setTimeout(function () {
    modal.remove();
  }, durationInSeconds * 1000);
};
