const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

  if (!imageList || slideButtons.length === 0) {
    console.warn("Slider DOM elements not found. Check class names or structure.");
    return;
  }

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;

      imageList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });
};

window.addEventListener("DOMContentLoaded", initSlider);
