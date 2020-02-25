let myLibrary = []

const list = document.getElementById("book-list")

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status == "on" ? "already read" : "not read yet"
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
}

const btn = document.getElementById("submit-button")
btn.addEventListener("click", () => {
    addBookToLibrary()
})

function addBookToLibrary() {
    const title = document.querySelector('[name="bookTitle"]').value
    const author = document.querySelector('[name="bookAuthor"]').value
    const pages = document.querySelector('[name="bookPages"]').value
    const status = document.querySelector('[name="bookStatus"]').value
    let book = new Book(title,author,pages,status)
    console.log(book)
    myLibrary.push(book)
    createCard(myLibrary)
    console.log(status)
    clearInputs()
}

function clearInputs() {
     
    document.querySelector('[name="bookTitle"]').value = ""
    document.querySelector('[name="bookAuthor"]').value= ""
    document.querySelector('[name="bookPages"]').value= ""
    document.querySelector('[name="bookStatus"]').value= ""
    
}




function createCard(myLibrary) {
    const book = myLibrary[myLibrary.length-1]
    const li = document.createElement('li')
    const bookText = `<div class="card">
                    <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${book.title}</p>
                            <p class="subtitle is-6">${book.author}</p>
                            </div>
                        </div>

                        <div class="content">
                            Number of pages: ${book.pages}</br>
                            Status of this book: ${book.status}
                        </div>
                    </div>
                    </div>`
    li.insertAdjacentHTML( 'beforeend', bookText );
    list.appendChild(li)
    
}



