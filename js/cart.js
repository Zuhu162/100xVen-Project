//Items in Cart
const cartItems = [];
let cartVariant;

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

// Toggle the display of the dropdown
const showCart = () => {
  dropDown.style.display === "none"
    ? (dropDown.style.display = "block")
    : (dropDown.style.display = "none");
};

//Increment Button Function
const increment = () => {
  cartItems.push(cartVariant);
  totalItems.textContent = cartItems.length;
  createCartItem();
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
    const sel = cartItems.findIndex((item) => item.id == incButton.id);
    cartVariant = cartItems[sel];

    increment();
  };

  //Decrement Button
  const decButton = document.createElement("button");
  decButton.className = "incDecButton";

  const delIcon = document.createElement("img");
  delIcon.className = "icon";
  delIcon.src = "../assets/icons/trash-solid.svg";
  decButton.appendChild(delIcon);
  decButton.onclick = () => {
    decrement();
    cartItem.remove();
    totalItems.textContent = cartItems.length;
  };

  cartItem.appendChild(cartItemImg);
  cartItem.appendChild(cartItemDets);
  cartItem.appendChild(incButton);
  cartItem.appendChild(decButton);

  dropDown.appendChild(cartItem);
};

//Decrement function
const decrement = () => {
  const toBeRemovedIndex = cartItems.findIndex((item) => {
    return item.id === selectedVariant.id;
  });
  cartItems.splice(toBeRemovedIndex, 1);
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
