
// Show Popup Dialog
const popup = document.querySelector(".popup-container");
const dialogs = document.querySelectorAll(".popup-dialog");
const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");
let currentSlide = 0;

function showPopUp(){
    popup.style.display = "block";
}

function hidePopUp(){
    popup.style.display = "none";
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
function shakeInput(){
    dialogs.forEach((dialog) => {
        dialog.classList.add("js-shake-input");
        
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
        shakeInput();
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
        hidePopUp()
    })
})

// Toggling Light and Dark Theme Buttons



// Toggling Reading status Switch

function addEventListenerToCard(){
    const bookCards = document.querySelectorAll(".added-books-card");
    bookCards.forEach((card) => {
        const switchContainer = card.querySelector(".switch");
        const switchButton = card.querySelector(".switch i");
        const statusIndicator = card.querySelector(".status-indicator");
        const removeBook = card.querySelector(".remove-book")

        const cardContainer = document.querySelector(".added-books-container");
        cardContainer.appendChild(card)

        switchContainer.addEventListener("click", () => {
            card.classList.toggle("js-card");
            switchContainer.classList.toggle("js-switch");
            switchButton.classList.toggle("switch-status");
            statusIndicator.classList.toggle("js-indicator");

        });

        removeBook.addEventListener("click", () => {
            cardContainer.removeChild(card)
        })
    });
}



const myLibrary = []

const bookTitle = document.querySelector(".js-input-title");
const bookAuthor = document.querySelector(".js-input-author");
const bookPages = document.querySelector(".js-input-pages");

// Object Constructor
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addToPile(){
    let bookToAdd = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    let generatedBookCard = 
    `
        <div class="added-books-card">
            <div class="title card-display">
                <p class="head-card">Title</p>
                <p class="divider">:</p>
                <p class="user-preference">${bookToAdd.title}</p>
            </div>

            <div class="author card-display">
                <p class="head-card">Author</p>
                <p class="divider">:</p>
                <p class="user-preference">${bookToAdd.author}</p>
            </div>

            <div class="pages card-display">
                <p class="head-card">Pages </p>
                <p class="divider">:</p>
                <p class="user-preference">${bookToAdd.pages}</p>
            </div>

            <div class="card-buttons">
                <button class="remove-book"><i class="fa-solid fa-trash"></i> </button>
                <div class="book-status">
                    <p class="status-indicator">Read</p>
                    <button class="switch"><i class="fa-solid fa-circle"></i></button>
                </div>
            </div>
        </div>
    `;

    myLibrary.push(bookToAdd);

    document.querySelector(".added-books-container").innerHTML += generatedBookCard;

    addEventListenerToCard()

    // Clear input fields after adding the book
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
}


const addBook = document.querySelector(".add-to-pile");
addBook.addEventListener("click", () => {
    document.querySelector(".intro-sentence").style.display = "none"
    addToPile()
    hidePopUp()
})