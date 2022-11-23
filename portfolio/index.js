let images = document.getElementsByClassName("image");
Array.from(images).forEach((image) => {
  console.log("Testing");
  image.addEventListener('click', (event) => {
    // console.log(event.target);
    let img = event.target;
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
  });
});
