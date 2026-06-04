const images = [
  "https://source.unsplash.com/600x400/?rendang",
  "https://source.unsplash.com/600x400/?nasi%20goreng",
  "https://source.unsplash.com/600x400/?sate",
  "https://source.unsplash.com/600x400/?gado%20gado",
  "https://source.unsplash.com/600x400/?indonesian%20food"
];

let index = 0;
const slide = document.getElementById("slide");

function changeImage() {
  slide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 3000);