const images = ["blue1.jpg","blue2.jpg","blue3.jpg","blue4.jpg"];
//const images = ["7 (1).jpg", "7 (2).jpg", "7 (3).jpg", "7 (4).jpg"]
const chosenImg = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImg}`;
image.id ="bg";

document.body.appendChild(image);

