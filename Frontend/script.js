
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");
const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");
let currentSlide = 0;

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
    const inputContainer = document.querySelectorAll(".input-container");

    inputContainer.forEach((container) => {
        const userInput = container.querySelector(".user-value");
        const errorMessage = container.querySelector(".error-message");

        dialogs.forEach((dialog) => {
            dialog.classList.add("js-shake-error");

            if(userInput.value.length === 0){           
                errorMessage.style.opacity = 1;
                errorMessage.textContent = "This field is required";
            }
    
            else if(userInput.value.length !== 0){
                errorMessage.style.opacity = 0;
                dialog.classList.remove("js-shake-error");
            }
        })
        
    })
}


document.querySelector(".add-button-1").addEventListener("click", () => {
    showPopUp();
    initializeSlide();
});

// Next Button Functionality
nextButtons.forEach((next) => {
    next.addEventListener("click", () => {
        nextSlide();
        checkInput();
    })
});

// When the user presses "Enter" on the keyboard
document.querySelectorAll(".user-value").forEach((input) => {
    input.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            nextSlide();
            checkInput();
        }
    })
})



// Previous Button Functionality

prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        prevSlide()
    });
    
});


// Cancel Button Functionality
const cancelButtons = document.querySelectorAll(".cancel");
cancelButtons.forEach((cancel) => {
    cancel.addEventListener("click", () => {
        popup.style.display = "none";
    })
})

// Toggling Light and Dark Theme Buttons












const myLibrary = []

const title = document.querySelector(".js-input-title");
const author = document.querySelector(".js-input-author");
const pages = document.querySelector(".js-input-pages")

function Book(){
    return
}

function addToPile(){
    
}