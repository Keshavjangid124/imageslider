const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slide-wrapper .slider-button");
slideButton.forEach(button => {
    button.addEventListener("click",() => {
        const direction = button.id === "prev-slide" ? -1:1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behaviour:"smooth"});
    });
});
}

window.addEventListener("load",initSlider);