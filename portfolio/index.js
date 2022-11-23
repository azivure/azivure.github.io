const enlargeImage = (event) => {
  img = event.target;
  console.log(event.target);
  img.style.transform = "scale(1.5)";
  img.style.transition = "transform 0.25s ease";
};
