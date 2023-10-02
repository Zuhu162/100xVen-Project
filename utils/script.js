const mensNikeShoes = [
  {
    name: "Nike Air Max 90",
    variant: "Red",
    price: 129.99,
    image1: "../assets/high1.jpg",
    image2: "nike-air-max-90-red-variant2.jpg",
    image3: "nike-air-max-90-red-variant3.jpg",
    image4: "nike-air-max-90-red-variant4.jpg",
    image5: "nike-air-max-90-red-variant5.jpg",
  },
  {
    name: "Nike Air Max 91",
    variant: "Black",
    price: 129.99,
    image1: "../assets/high2.jpg",
    image2: "nike-air-max-90-black-variant2.jpg",
    image3: "nike-air-max-90-black-variant3.jpg",
    image4: "nike-air-max-90-black-variant4.jpg",
    image5: "nike-air-max-90-black-variant5.jpg",
  },
  {
    name: "Nike Air Max 92",
    variant: "Blue",
    price: 129.99,
    image1: "../assets/high3.jpg",
    image2: "nike-air-max-90-blue-variant2.jpg",
    image3: "nike-air-max-90-blue-variant3.jpg",
    image4: "nike-air-max-90-blue-variant4.jpg",
    image5: "nike-air-max-90-blue-variant5.jpg",
  },
  // {
  //   name: "Nike Air Max 90",
  //   variant: "White",
  //   price: 129.99,
  //   image1: "../assets/high1.jpg",
  //   image2: "nike-air-max-90-white-variant2.jpg",
  //   image3: "nike-air-max-90-white-variant3.jpg",
  //   image4: "nike-air-max-90-white-variant4.jpg",
  //   image5: "nike-air-max-90-white-variant5.jpg",
  // },
  // {
  //   name: "Nike Air Max 90",
  //   variant: "Gray",
  //   price: 129.99,
  //   image1: "../assets/high1.jpg",
  //   image2: "nike-air-max-90-gray-variant2.jpg",
  //   image3: "nike-air-max-90-gray-variant3.jpg",
  //   image4: "nike-air-max-90-gray-variant4.jpg",
  //   image5: "nike-air-max-90-gray-variant5.jpg",
  // },
];

//Preview image in second column
let selectedVariant = mensNikeShoes[0];
const previewImgDiv = document.getElementById("previewImg");

let previewImg = document.createElement("img");
previewImg.className = "productImg";
previewImg.src = selectedVariant.image1;
previewImgDiv.append(previewImg);

//Get variantDetailsContainer
let itemTitle = document.getElementById("itemTitle");
itemTitle.textContent = mensNikeShoes[0].name;
let itemVariant = document.getElementById("itemVariant");
itemVariant.textContent = mensNikeShoes[0].variant;
let itemPrice = document.getElementById("itemPrice");
itemPrice.textContent = `$${mensNikeShoes[0].price}`;

// Get variantImageContainer
const imageContainer = document.getElementById("imageContainer");

// Loop through the images of the selected variant and create <img> elements
mensNikeShoes.forEach((shoe) => {
  const div = document.createElement("div");

  div.className = "variantImgContainer";
  div.onclick = () => {
    selectedVariant = shoe;
    previewImg.src = shoe.image1;
    itemTitle.textContent = shoe.name;
    itemVariant.textContent = shoe.variant;
  };
  const img = document.createElement("img");
  img.className = "variantImg";
  img.src = shoe.image1;
  img.alt = `${shoe.name} - ${shoe.variant}`;
  div.append(img);
  imageContainer.append(div);
});

//Items in Cart
const cartItems = [];

//Add to Cart Button Function
const totalItems = document.getElementById("totalItems");

const addToCart = () => {
  const cartSection = document.getElementById("cartSection");
  cartSection.style.display = "block";
  cartSection.style.display = "flex";
  cartItems.push(selectedVariant);
  // totalItems.textContent = totalItemsAmount;
  console.log(cartItems.length);
  totalItems.textContent = cartItems.length;

  const modal = document.createElement("div");

  modal.className = "addedToCartModal";
  modal.textContent = "Item successfully added to cart";
  const body = document.getElementById("topbarContainer");
  body.appendChild(modal);

  // Set a timer to remove the modal after a specified duration (e.g., 3 seconds)
  const durationInSeconds = 5; // Adjust the duration as needed
  setTimeout(function () {
    modal.remove(); // Remove the modal from the DOM
  }, durationInSeconds * 1000); // Convert seconds to milliseconds
};

//Increment Button Function
const increment = () => {
  cartItems.push(selectedVariant);
  totalItems.textContent = cartItems.length;
};

//Decrement Button Function
const decrement = () => {
  const toBeRemoved = cartItems.findIndex((item) => {
    return item.name === selectedVariant.name;
  });
  delete cartItems[toBeRemoved];
};
