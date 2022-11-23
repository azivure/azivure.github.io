let images = document.getElementsByClassName("image");
let lightbox = document.getElementsByClassName("lightbox-target")[0];

Array.from(images).forEach((image) => {
  console.log("Testing");
  image.addEventListener("click", () => {
    let src = image.src;
    let lightboxImage = document.getElementsByClassName("lightbox-image")[0];
    lightbox.classList.add("lightbox-display");
    lightboxImage.classList.add("lightbox-display-image");
    lightboxImage.src = src;
  });
});

lightbox.addEventListener("click", () => {
  let lightboxImage = document.getElementsByClassName("lightbox-image")[0];
  lightbox.classList.remove("lightbox-display");
  lightboxImage.classList.remove("lightbox-display-image");
});
