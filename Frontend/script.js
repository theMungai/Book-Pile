const bookTitle = document.querySelector("#title");
const authorContainer = document.querySelector("#author");
const pageNumber = document.querySelector("#pages");
const confirmBox = document.querySelector("#confirm");

const inputSlider = [bookTitle,authorContainer,pageNumber,confirmBox];
let currentInput = inputSlider[0]

const nextButton = document.querySelectorAll(".next-button");
const prevButton = document.querySelector(".prev-button");

nextButton.forEach((next) => {
    next.addEventListener("click", () => {
        nextInput()
     });
})


function nextInput(){
    currentInput = inputSlider[1]
}