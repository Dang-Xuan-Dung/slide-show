makeSlideShow('.slider');

function makeSlideShow(slider) {
  const sliderList = document.querySelector(".slider-list");
  const sliderItems = document.querySelectorAll(".slider-item");
  const preBtn = document.querySelector(".slider-pre");
  const nextBtn = document.querySelector(".slider-next");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  const DIRECTION = {
    next : 'next',
    previous : 'previous'
  }
  let positionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(DIRECTION.next);
  });

  preBtn.addEventListener("click", function () {
    handleChangeSlide(DIRECTION.previous);
  });

  dotItems.forEach((item) =>
    item.addEventListener("click", function (e) {
      dotItems.forEach((es) => es.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      sliderList.style = `transform : translateX(${
        -1 * index * sliderItemWidth
      }px)`;
      positionX = -1 * index * sliderItemWidth;
    })
  );

  function handleChangeSlide(direction) {
    if (direction === DIRECTION.next ) {
      if (index === sliderLength - 1) {
        positionX = sliderItemWidth;
      }
      dotItems.forEach((es) => es.classList.remove("active"));
      positionX = positionX - sliderItemWidth;
      sliderList.style = `transform : translateX(${positionX}px)`;
      index++;
      if (index === sliderLength) {
        index = 0;
        positionX = 0;
      }
      dotItems[index].classList.add("active");
    }

    else {
      if (index === 0) {
        index = sliderLength;
        positionX = -1 * sliderItemWidth * index;
      }
      dotItems.forEach((es) => es.classList.remove("active"));
      positionX = positionX + sliderItemWidth;
      sliderList.style = `transform : translateX(${positionX}px)`;
      index--;
      dotItems[index].classList.add("active");
    }
  }

  var autoPlayInterval = setInterval(function () {
    handleChangeSlide(DIRECTION.next);
  }, 3000);
}
