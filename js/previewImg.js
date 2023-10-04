//Getting the item that is to be displayed initially
let products = af1h;
let product = af1h[0];
//Preview image in first column
let selectedVariant = product;
const previewImgDiv = document.getElementById("previewImg");

//Get body
const body = document.getElementsByTagName("BODY")[0];
//Set initial body background
body.style.background = product.colorTheme[0];

//Get footer
let footer = document.getElementsByTagName("footer")[0];
//Set initial footer background, textColor
footer.style.background = product.colorTheme[1];
footer.style.color = product.colorTheme[0];

//Get Add To Cart Button
let addToCartButton = document.getElementById("addToCartButton");
addToCartButton.style.background = product.colorTheme[1];
addToCartButton.style.color = product.colorTheme[0];

//Get inStock
let inStock = product.inStock;
const itemInStock = document.getElementById("itemInStock");

//Get Logo
let logo = document.getElementById("logo");
logo.style.fill = product.colorTheme[1];

//Disable button if out of stock
if (!inStock) {
  addToCartButton.textContent = "Out of Stock";
  addToCartButton.className = "cartButtonDisabled";
  addToCartButton.onclick = null;
  itemInStock.textContent = "Out of Stock";
  itemInStock.style.color = "Red";
} else {
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.className = "cartButton";
  addToCartButton.onclick = () => addToCart();
  itemInStock.textContent = "In Stock";
  itemInStock.style.color = "Green";
}

//Get preview image
let previewImg = document.createElement("img");
previewImg.classList.add("item-2Anim");

//Set initial preview image
previewImg.className = "productImg";
previewImg.src = selectedVariant.image1;
previewImgDiv.append(previewImg);

//Get variantDetailsContainer
let itemTitle = document.getElementById("itemTitle");
itemTitle.textContent = product.name;
let itemVariant = document.getElementById("itemVariant");
itemVariant.textContent = product.variant;
let itemPrice = document.getElementById("itemPrice");
itemPrice.textContent = `$${product.price}`;
let itemDesc = document.getElementById("itemDesc");
itemDesc.textContent = product.description;

// Get variantImageContainer
const imageContainer = document.getElementById("imageContainer");

// Loop through the images of the selected variant and create <img> elements
products.forEach((shoe) => {
  const div = document.createElement("div");
  // const gradientBackground = `${shoe.colorTheme[0]}`;

  div.className = "variantImgContainer";
  div.onclick = () => {
    body.style.background = shoe.colorTheme[0];
    footer.style.background = shoe.colorTheme[1];
    footer.style.color = shoe.colorTheme[0];
    addToCartButton.style.background = shoe.colorTheme[1];
    addToCartButton.style.color = shoe.colorTheme[0];

    selectedVariant = shoe;
    previewImg.src = shoe.image1;

    //Animation Fly in
    previewImg.classList.remove("item-2Anim");
    void previewImg.offsetWidth;
    previewImg.classList.add("item-2Anim");

    itemTitle.textContent = shoe.name;
    itemVariant.textContent = shoe.variant;
    itemPrice.textContent = `$${shoe.price}`;
    itemDesc.textContent = shoe.description;
    logo.style.fill = shoe.colorTheme[1];

    //In Stock Check
    inStock = shoe.inStock;
    if (!inStock) {
      addToCartButton.textContent = "Out of Stock";
      addToCartButton.className = "cartButtonDisabled";
      addToCartButton.onclick = null;
      itemInStock.textContent = "Out of Stock";
      itemInStock.style.color = "Red";
    } else {
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.className = "cartButton";
      addToCartButton.onclick = () => addToCart();
      itemInStock.textContent = "In Stock";
      itemInStock.style.color = "Green";
    }
  };
  const img = document.createElement("img");
  img.className = "variantImg";
  img.src = shoe.image1;
  img.alt = `${shoe.name} - ${shoe.variant}`;
  div.append(img);
  imageContainer.append(div);
});

//Set Video Source
const videoPlayer = document.getElementById("videoPlayer");
videoPlayer.src = videoUrl;

// //Set Content details
// const content = document.getElementById("content");
// content.textContent = productDetails;
