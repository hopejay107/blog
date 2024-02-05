
       /* const addEventOnElements = function (elements, eventType, callback) {
            for (let i = 0, len = elements.length; i < len; i++) {
              elements[i].addEventListener(eventType, callback);
            }
        }
    
        const navbar = document.querySelector("[data-navbar]");
        const navTogglers = doocument.querySelectorAll("[data-nav-toggler]");
        const toggleNav = () => navbar.classList.toggle("active");
        addEventOnElements(navTogglers, "click", toggleNav);
 

       */


        function openMenu() {
          document.querySelector('.navbar').style.display = 'block';
        }
        
        function closeMenu() {
          document.querySelector('.navbar').style.display = 'none';
        }

/*
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");


let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue
("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;
const moveSliderItem = function () {
  sliderContainer.style.transform = 'translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)';
}



const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;
  
  if(slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  moveSliderItems();
}

sliderNextBtn.addEventListener("click", slideNext);
*/

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);