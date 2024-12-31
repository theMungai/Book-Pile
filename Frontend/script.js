
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");

function showPopUp(){
    popup.style.display = "block";
}

document.querySelector(".add-button-1").addEventListener("click", () => {
    showPopUp()
    initializeSlide()
});


// If the field is not filled, show error message
function checkInput(){
    const userInput = document.querySelectorAll(".user-value");
    const errorMessages = document.querySelectorAll(".error-message");

    userInput.forEach((input)=> {
        if(input.value === ""){
            errorMessages.forEach((message) => {
                message.style.opacity = 1;
                message.textContent = "This field is required!" 
            })
        }
    })
}




// Next Button Functionality
const nextButtons = document.querySelectorAll(".next-button");
nextButtons.forEach((next) => {
    next.addEventListener("click", () => {
        nextSlide()
        checkInput()
    })
})


let currentSlide = 0;
// Previous Button Functionality
const prevButtons = document.querySelectorAll(".prev-button");
prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        prevSlide()
    });
    
})


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