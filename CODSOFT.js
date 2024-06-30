const   slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide,index) => {
    slide.style.left = `${index * 100}%`
    }
)


const goPrev = () => {
    if (counter != 0) {
        counter--;
        slideImage();
        }
}

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
      }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

const goSlide1 = () => {
  if (counter != 0) {
      counter = 0;
      slideImage();
    }

  else if (counter < slides.length - 1) {
           counter = 0;
           slideImage();
    }
}

const goSlide2 = () => {
  if (counter != 0) {
      counter = 1;
      slideImage();
    }

  else if (counter < slides.length - 1) {
           counter = 1;
           slideImage();
    }
}

const goSlide3 = () => {
  if (counter != 0) {
      counter = 2;
      slideImage();
    }

  else if (counter < slides.length - 1) {
           counter = 2;
           slideImage();
    }
}

const goSlide4 = () => {
  if (counter != 0) {
      counter = 3;
      slideImage();
      }
  else if (counter < slides.length - 1) {
           counter = 3;
           slideImage();
    }
}

const goSlide5 = () => {
  if (counter < slides.length - 1) {
      counter = 4;
      slideImage();
      }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
      var dropdowns = document.getElementsByClassName(".dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//--------------Calculator---------------------//

  
  let display = document.getElementById('display');
  let firstNumber = '';
  let secondNumber = '';
  let operation = null;
  let shouldResetDisplay = false;

  function appendNumber(number) {
      if (shouldResetDisplay) {
          display.value = '';
          shouldResetDisplay = false;
      }
      display.value += number;
  }

  function setOperation(op) {
      if (firstNumber === '') {
          firstNumber = display.value;
      } else if (operation) {
          secondNumber = display.value;
          calculateResult();
          firstNumber = display.value;
      }
      operation = op;
      shouldResetDisplay = true;
  }

  function calculateResult() {
      if (firstNumber === '' || operation === null) return;
      secondNumber = display.value;
      display.value = eval(`${firstNumber}${operation}${secondNumber}`);
      firstNumber = '';
      secondNumber = '';
      operation = null;
  }

  function clearDisplay() {
      display.value = '';
      firstNumber = '';
      secondNumber = '';
      operation = null;
  }
