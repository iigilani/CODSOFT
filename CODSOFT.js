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
/*----------------------------e-Mail-Server------------------------*/

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'iigilani@gmail.com', 
            pass: 'jxvx pnqa auyi rsqk'
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'iigilani@gmail.com',
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Failed to send message. Please try again.');
        }
        res.send('Message sent successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});