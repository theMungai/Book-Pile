
// Show Popup Dialog
const popup = document.querySelector(".popup-container")

function showPopUp(){
    popup.style.display = "block"
}

document.querySelector(".add-button-1").addEventListener("click", () => {
    showPopUp()
});


// If the field is not filled, show error message
const userInputs = document.querySelectorAll(".user-value");
const inputContainer = document.querySelectorAll(".user-input");

userInputs.forEach((input) => {
    inputContainer.forEach((container) => {
        const errorMessage = container.querySelector(".error-message");

        if(input.value === ""){
            errorMessage.style.opacity = 1;
            errorMessage.textContent = "This field is required"
        }
    })
})