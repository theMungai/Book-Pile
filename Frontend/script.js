
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");

function showPopUp(){
    popup.style.display = "block";
}

function initializeSlide(){
    dialogs[currentSlide].classList.add("displaySlide")
}

function showSlide(index){
    dialogs.forEach((dialog) => {
        dialog.classList.remove("displaySlide")
    });
    dialogs[currentSlide].classList.add("displaySlide");
}

function nextSlide(){
    currentSlide ++;
    showSlide(currentSlide)
}

function prevSlide(){
    currentSlide--;
    showSlide(currentSlide)
}

// If the field is not filled, show error message
function checkInput(){
    const userInput = document.querySelectorAll(".user-value");
    const inputContainer = document.querySelectorAll(".user-input");

    userInput.forEach((input)=> {
        if(input.value === ""){
            dialogs.forEach((dialog) => {
                const errorMessage = dialog.querySelector(".error-message");
                errorMessage.style.opacity = 1;
                errorMessage.textContent = "This field is required"
            })
        }
    })
}


document.querySelector(".add-button-1").addEventListener("click", () => {
    showPopUp();
    initializeSlide();
});

// Next Button Functionality
const nextButtons = document.querySelectorAll(".next-button");
nextButtons.forEach((next) => {
    next.addEventListener("click", () => {
        nextSlide();
        checkInput();
    })
})


let currentSlide = 0;
// Previous Button Functionality
const prevButtons = document.querySelectorAll(".prev-button");
prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        prevSlide()
    });
    
});

// Toggling Light and Dark Theme Buttons

