
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
        }
    })
})

// Previous Button Functionality
prevButtons.forEach((prev) => {
    prev.addEventListener("click", () => {
        prevSlide()
        shakeInput();
    });
});

// Cancel Button Functionality
const cancelButtons = document.querySelectorAll(".cancel");
cancelButtons.forEach((cancel) => {
    cancel.addEventListener("click", () => {
        hidePopUp()
    })
});

// Text Area Functionality
const textArea = document.querySelector(".notes-summary textarea");
textArea.addEventListener("input", () => {
    textArea.style.height = "auto";
    textArea.style.height = (textArea.scrollHeight) + "px"
});

// Toggling Reading status Switch
function addEventListenerToCard(){
    const bookCards = document.querySelectorAll(".added-books-card");
    bookCards.forEach((card) => {
        const switchContainer = card.querySelector(".switch");
        const switchButton = card.querySelector(".switch i");
        const statusIndicator = card.querySelector(".status-indicator");
        const removeBook = card.querySelector(".remove-book");
        const showMoreBtn = card.querySelector(".show-more-button");

        const cardContainer = document.querySelector(".added-books-container");
        cardContainer.appendChild(card)

        switchContainer.addEventListener("click", () => {
            card.classList.toggle("js-card");
            switchContainer.classList.toggle("js-switch");
            switchButton.classList.toggle("switch-status");
            statusIndicator.classList.toggle("js-indicator");
        });

        // Toggling Show More button
        showMoreBtn.addEventListener("click", () => {
            const userOverview = card.querySelector(".user-book-overview");
            userOverview.classList.toggle("show-more-over-view");

            if(showMoreBtn.innerText === "Show more..."){
                showMoreBtn.innerText = "Show less..."
            }
            else{
                showMoreBtn.innerText = "Show more..."
            }
        })
    });
}

// Retrieve books from localStorage 
const myLibrary = JSON.parse(localStorage.getItem("books")) || [];


const bookTitle = document.querySelector(".js-input-title");
const bookAuthor = document.querySelector(".js-input-author");
const bookPages = document.querySelector(".js-input-pages");
const bookNotes = document.querySelector(".js-input-notes");

// Object Constructor
// function Book(title, author, pages, notes){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.notes = notes
// }

class Book {
    constructor(title, author, pages, notes){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.notes = notes
    }
}


function addToPile(index){
    let bookToAdd = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookNotes.value);
    let generatedBookCard = `
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
                <p class="head-card">Pages</p>
                <p class="divider">:</p>
                <p class="user-preference">${bookToAdd.pages}</p>
            </div>

            <div class="book-overview ">
                <p class="head">Book Overview</p>
                <p class="user-book-overview">${bookToAdd.notes}</p>
                <button class="show-more-button">Show more...</button>
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
    localStorage.setItem("books", JSON.stringify(myLibrary));

    document.querySelector(".added-books-container").innerHTML += generatedBookCard;

    addEventListenerToCard();

    // Clear input fields after adding the book
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookNotes.value = '';
}

function deleteBook(index){
    myLibrary.splice(index,1)
    localStorage.setItem("books", JSON.stringify(myLibrary));
    renderBooks()
}

// Event listener for the "Add Book" button
const addBook = document.querySelector(".add-to-pile");
addBook.addEventListener("click", () => {
    window.location.reload(true)
    document.querySelector(".intro-sentence").style.display = "none";
    addToPile();
    hidePopUp();
});

// Render books from localStorage when the page loads
function renderBooks() {
    const addedBooksContainer = document.querySelector(".added-books-container");
    addedBooksContainer.innerHTML = '';

    myLibrary.forEach((book,index) => {
        const generatedBookCard = `
            <div class="added-books-card">
                <div class="title card-display">
                    <p class="head-card">Title</p>
                    <p class="divider">:</p>
                    <p class="user-preference">${book.title}</p>
                </div>

                <div class="author card-display">
                    <p class="head-card">Author</p>
                    <p class="divider">:</p>
                    <p class="user-preference">${book.author}</p>
                </div>

                <div class="pages card-display">
                    <p class="head-card">Pages</p>
                    <p class="divider">:</p>
                    <p class="user-preference">${book.pages}</p>
                </div>

                <div class="book-overview ">
                    <p class="head">Book Overview</p>
                    <p class="user-book-overview">${book.notes}</p>
                    <button class="show-more-button">Show more...</button>
                </div>

                <div class="card-buttons">
                    <button class="remove-book" data-index = "${index}"><i class="fa-solid fa-trash"></i></button>
                    <div class="book-status">
                        <p class="status-indicator">Read</p>
                        <button class="switch"><i class="fa-solid fa-circle"></i></button>
                    </div>
                </div>
            </div>
        `;
        addedBooksContainer.innerHTML += generatedBookCard;
    });

    document.querySelectorAll(".remove-book").forEach((button) => {
        button.addEventListener("click", () => {
            const index = button.dataset.index
            deleteBook(index)
        })
    })

    addEventListenerToCard();
}

document.addEventListener("DOMContentLoaded", () => {
    renderBooks(); 
});
