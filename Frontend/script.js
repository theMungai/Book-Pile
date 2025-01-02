
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");
const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");

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
    const inputContainer = document.querySelectorAll(".input-container");
    const nextButtons = document.querySelectorAll(".next-button");

    userInput.forEach((input)=> {
        input.focus()
        if(input.value.length === 0){
            inputContainer.forEach((container) => {
                const errorMessage = container.querySelector(".error-message");
                errorMessage.style.opacity = 1;
                errorMessage.textContent = "This field is required";   
            });

        }
        else if(input.value.length > 0) {

        }
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


let currentSlide = 0;
// Previous Button Functionality

prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        prevSlide()
    });
    
});

// Toggling Light and Dark Theme Buttons

