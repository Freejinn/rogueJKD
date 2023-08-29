const addSignupModal_el = document.getElementById("signup-modal");
const signupBtn_el = document.getElementById("signup-btn");
const backdrop_el = document.getElementById('backdrop');
const closeBtn_el = document.getElementById('close-btn');
const userInputs_el = document.querySelectorAll('input');
const clearButton_el = document.getElementById('clear-btn');
const textAreaInput_el = document.getElementById('text-area');

document.querySelectorAll('nav a').forEach(link => {
    if(link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    };
})

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
}

const clearUsrInput = () => {
    for (userInpt of userInputs_el) {
        userInpt.value = '';
    }
    textAreaInput_el.value = '';
}

signupBtn_el.addEventListener("click", openSignupModal);
backdrop_el.addEventListener('click', closeSignupModal);
closeBtn_el.addEventListener('click', closeSignupModal);
clearButton_el.addEventListener('click', clearUsrInput);

let counter = 0;
displayImages();
function displayImages(){
    const images = document.getElementsByClassName("image");
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    counter++
    if (counter > images.length) {
        counter = 1;
    }
    images[counter-1].style.display = "block";
    setTimeout(displayImages, 3000);
}