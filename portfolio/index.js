let images = document.getElementsByClassName("image");
let lightbox = document.getElementsByClassName("lightbox-target")[0];

Array.from(images).forEach((image) => {
  console.log("Testing");
  image.addEventListener("click", () => {
    let src = image.src;
    lightbox.src = src;
    let lightboxImage = document.getElementsByClassName("lightbox-image")[0];
    let lightboxClose = document.getElementsByClassName("lightbox-close")[0];
    lightbox.classList.add("lightbox-display");
    lightboxImage.classList.add("lightbox-display-image");
    lightboxClose.classList.add("lightbox-display-close");
  });
});

lightbox.addEventListener("click", () => {
  let lightboxImage = document.getElementsByClassName("lightbox-image")[0];
  let lightboxClose = document.getElementsByClassName("lightbox-close")[0];
  lightbox.classList.remove("lightbox-display");
  lightboxImage.classList.remove("lightbox-display-image");
  lightboxClose.classList.remove("lightbox-display-close");
});
