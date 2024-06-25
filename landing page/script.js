const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BACKPACKS",
    price: 999,
    description: "Skybags Casual Backpack 28L, 2 Main Compartments, Bottle Pocket, Front Pocket, Padded Shoulder Straps",
    colors: [
      {
        code: "black",
        img: "image/bpblack.png",
      },
      {
        code: "red",
        img: "image/backpackred.png",
      },
    ],
  },
  {
    id: 2,
    title: "DUFFLE",
    price: 1999,
    description: "Spacious duffle bag with multiple compartments and durable materials|| Skybags Cardiff Polyester 55 Cms Travel Duffle Bag",
    colors: [
      {
        code: "red",
        img: "image/DUFFLERED.png",
      },
      {
        code: "darkblue",
        img: "image/DUFFLEBLUE.png",
      },
    ],
  },
  {
    id: 3,
    title: "SIDE BAGS",
    price: 699,
    description: "Compact and stylish side bags suitable for daily use|Skybags Polyester 34.5 cms Red Messenger Bag.",
    colors: [
      {
        code: "red", 
        img: "image/SIDEBAGSRED.png",
      },
      {
        code: "darkblue", 
        img: "image/SIDEBAGSBLUE.png",
      },
    ],
  },
  {
    id: 4,
    title: "LAPTOP BAG",
    price: 749,
    description: "Protective laptop bag with padded compartments and sleek design.|small 18 L laptop backpack ",
    colors: [
      {
        code: "darkblue",
        img: "image/laptopbagblue.png",
      },
      {
        code: "black",
        img: "image/laptopbagblack.png",
      },
    ],
  },
  {
    id: 5,
    title: "TROLLEY",
    price: 3149,
    description: "Sturdy trolley bags with smooth wheels and spacious compartments|Skybags Trooper 55 Cms Polycarbonate Blue Hardsided CabinLuggage",
    colors: [
      {
        code: "blue",
        img: "image/trolleyblue.png",
      },
      {
        code: "green",
        img: "image/trolleypalegreen.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Initial setup for the first product
currentProductImg.src = chosenProduct.colors[0].img;
currentProductTitle.textContent = chosenProduct.title;
currentProductPrice.textContent = "Rs. " + chosenProduct.price;
currentProductDesc.textContent = chosenProduct.description;
currentProductColors.forEach((color, index) => {
  color.style.backgroundColor = chosenProduct.colors[index].code;
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    chosenProduct = products[index];

    // Change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "Rs. " + chosenProduct.price;
    currentProductDesc.textContent = chosenProduct.description;
    currentProductImg.src = chosenProduct.colors[0].img;

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
