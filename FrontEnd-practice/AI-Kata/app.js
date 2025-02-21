class Book {
    constructor(name, author, category, price) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.price = parseInt(price);
    }
}

class BookManager {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('books')) || [];
    }

    addBook(book) {
        this.books.push(book);
        this.updateLocalStorage();
        this.updateCategoryFilter();
    }

    updateLocalStorage() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    updateCategoryFilter() {
        const uniqueCategories = [...new Set(this.books.map(book => book.category))];
        const filter = document.getElementById('categoryFilter');
        filter.innerHTML = '<option value="">All</option>';
        uniqueCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filter.appendChild(option);
        });
    }

    deleteBook(index) {
        this.books.splice(index, 1);
        this.updateLocalStorage();
        this.updateCategoryFilter();
    }
}

const bookManager = new BookManager();
window.onload = () => {
    displayBooks();
    bookManager.updateCategoryFilter();
};

function addBook() {
    const name = document.getElementById('bookName').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const category = document.getElementById('bookCategory').value.trim();
    const price = document.getElementById('bookPrice').value.trim();

    if (!name || !author || !category || !price) {
        alert('All fields are required!');
        return;
    }

    const book = new Book(name, author, category, price);
    bookManager.addBook(book);
    displayBooks();
    document.getElementById('bookForm').reset();
}

function displayBooks() {
    const books = bookManager.books;
    const tableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table data

    books.forEach((book, index) => {
        const row = tableBody.insertRow();
        
        row.insertCell(0).innerText = book.name;
        row.insertCell(1).innerText = book.author;
        row.insertCell(2).innerText = book.category;
        row.insertCell(3).innerText = book.price;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = () => {
            bookManager.deleteBook(index);
            displayBooks();
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'btn btn-warning ms-2';
        editButton.onclick = () => editBook(index);

        const actionCell = row.insertCell(4);
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

function editBook(index) {
    const book = bookManager.books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('bookAuthor').value = book.author;
    document.getElementById('bookCategory').value = book.category;
    document.getElementById('bookPrice').value = book.price;

    const submitButton = document.querySelector('#bookForm button');
    submitButton.onclick = () => updateBook(index);
    submitButton.textContent = 'Update';
}

function updateBook(index) {
    const updatedBook = new Book(
        document.getElementById('bookName').value.trim(),
        document.getElementById('bookAuthor').value.trim(),
        document.getElementById('bookCategory').value.trim(),
        document.getElementById('bookPrice').value.trim()
    );

    bookManager.books[index] = updatedBook;
    bookManager.updateLocalStorage();
    displayBooks();

    document.querySelector('#bookForm button').onclick = addBook;
    document.querySelector('#bookForm button').textContent = 'Submit';
    document.getElementById('bookForm').reset();
}

function filterBooks() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredBooks = selectedCategory === '' ? bookManager.books : bookManager.books.filter(book => book.category === selectedCategory);
    updateBooksTable(filteredBooks);
}

function updateBooksTable(books) {
    const tableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table data

    books.forEach((book, index) => {
        const row = tableBody.insertRow();

        row.insertCell(0).innerText = book.name;
        row.insertCell(1).innerText = book.author;
        row.insertCell(2).innerText = book.category;
        row.insertCell(3).innerText = book.price;

        const actionCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.onclick = () => {
            bookManager.deleteBook(index);
            displayBooks();
        };
        actionCell.appendChild(deleteButton);
    });
}