const addSignupModal_el = document.getElementById('signup-modal');
const signupBtn_el = document.getElementById('signup-btn');
const backdrop_el = document.getElementById('backdrop');
const closeBtn_el = document.getElementById('close-btn');
const userInputs_el = document.querySelectorAll('input');
const clearButton_el = document.getElementById('clear-btn');
const textAreaInput_el = document.getElementById('text-area');
const quote = document.getElementById('quote');
const author = document.getElementById('author');


document.querySelectorAll('nav a').forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
});

const generateQuote = function() {
    const quotes = [
      {
        quote:
          'There are no limits. There are only plateaus, and you must not stay there. You must go beyond them.',
        author: '~ Bruce Lee ~',
      },
      {
        quote: "I train as many arts as possible. I'm constantly learning all the time. Once you stop being a student, you stop growing.",
        author: '~ Dan Insosanto ~' 
      },
      {
          quote: "Mastering others is strength; mastering yourself is true power.",
          author: "~ Lao Tzu ~"
      },
      {
          quote: "Impossible is just a word thrown around my small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact, it's an opinion.",
          author: "~ Muhammad Ali ~"
      }
    ];
    // console.log("Hi");

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[arrayIndex].quote;
    author.innerHTML = quotes[arrayIndex].author;
  }

  window.onload = function() {
    generateQuote();
  }


const toggleBackdrop = () => {
  backdrop_el.classList.toggle('visible');
};

const openSignupModal = () => {
  addSignupModal_el.classList.add('visible');
  toggleBackdrop();
};

const closeSignupModal = () => {
  addSignupModal_el.classList.remove('visible');
  backdrop_el.classList.remove('visible');
  clearUsrInput();
  textAreaInput_el.value = '';
};

const clearUsrInput = () => {
  for (userInpt of userInputs_el) {
    userInpt.value = '';
  }
  textAreaInput_el.value = '';
};

signupBtn_el.addEventListener('click', openSignupModal);
backdrop_el.addEventListener('click', closeSignupModal);
closeBtn_el.addEventListener('click', closeSignupModal);
clearButton_el.addEventListener('click', clearUsrInput);


  
let counter = 0;
displayImages();
function displayImages() {
  const images = document.getElementsByClassName('image');
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  counter++;
  if (counter > images.length) {
    counter = 1;
  }
  images[counter - 1].style.display = 'block';
  setTimeout(displayImages, 3000);
}


