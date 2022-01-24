const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

const BG = "background2";

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BG;
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
