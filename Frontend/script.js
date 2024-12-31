
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");

function showPopUp(){
    popup.style.display = "block";
    dialogs[0].style.display = "block"
}

document.querySelector(".add-button-1").addEventListener("click", () => {
    showPopUp()
});


// Navigating through different inputs

// dialogs.forEach((dialog)=> {

// })

// If the field is not filled, show error message
// const userInputs = document.querySelectorAll(".user-value");
// const inputContainer = document.querySelectorAll(".user-input");

// userInputs.forEach((input) => {
//     inputContainer.forEach((container) => {
//         const errorMessage = container.querySelector(".error-message");

//         if(input.value === ""){
//             errorMessage.style.opacity = 1;
//             errorMessage.textContent = "This field is required"
//         }
//     })
// });



// Next Button Functionality
const nextButtons = document.querySelectorAll(".next-button");
nextButtons.forEach((next) => {
    next.addEventListener("click", () => {
        dialogs[1].style.display = "block";
        dialogs[0].style.display = "none";
    })
})


// Previous Button Functionality
const prevButtons = document.querySelectorAll(".prev-button");
prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        dialogs[1].style.display = "none";
        dialogs[0].style.display = "block";
    })
})