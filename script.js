let currentIndex = 0;

function moveSlide(step) {
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;

  currentIndex = (currentIndex + step + totalImages) % totalImages;

  const newTransformValue = -currentIndex * 100;
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${newTransformValue}%)`;

  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

updateDots();
