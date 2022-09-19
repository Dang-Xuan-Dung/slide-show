makeSlideShow('.slider');

function makeSlideShow(slider) {
  const sliderList = document.querySelector(".slider-list");
  const sliderItems = document.querySelectorAll(".slider-item");
  const preBtn = document.querySelector(".slider-pre");
  const nextBtn = document.querySelector(".slider-next");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItem_Width = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });

  preBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  dotItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      dotItems.forEach((es) => es.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      sliderList.style = `transform : translateX(${
        -1 * index * sliderItem_Width
      }px)`;
      positionX = -1 * index * sliderItem_Width;
    })
  );

  function handleChangeSlide(direction) {
    if (direction == 1) {
      if (index == sliderLength - 1) {
        positionX = sliderItem_Width;
      }
      dotItems.forEach((es) => es.classList.remove("active"));
      positionX = positionX - sliderItem_Width;
      sliderList.style = `transform : translateX(${positionX}px)`;
      index++;
      if (index == sliderLength) {
        index = 0;
        positionX = 0;
      }
      dotItems[index].classList.add("active");
    }

    else {
      if (index == 0) {
        index = sliderLength;
        positionX = -1 * sliderItem_Width * index;
      }
      dotItems.forEach((es) => es.classList.remove("active"));
      positionX = positionX + sliderItem_Width;
      sliderList.style = `transform : translateX(${positionX}px)`;
      index--;
      dotItems[index].classList.add("active");
    }
  }

  var autoplayInterval = setInterval(function () {
    handleChangeSlide(1);
  }, 3000);
}
