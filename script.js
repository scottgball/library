const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  };

Book.prototype.addToLibrary = function () {
  library.push(this);
}

function displayBooks () {
  library.forEach(Book => {
    console.table(Book)
  });
};

const addButton = document.querySelector('#addButton');
const formTitle = document.querySelector('#formTitle');
const formAuthor = document.querySelector('#formAuthor');
const formPages = document.querySelector('#formPages');
const formReadUnread = document.querySelector('#formReadUnread');
const form = document.querySelector('form');
const container = document.querySelector('.container');


form.onsubmit = function() {
  const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formReadUnread.value);
  newBook.addToLibrary();
  event.preventDefault();
  makeCard();
  clearForm();
};

function makeCard() {
  const card = document.createElement('div');
  const cardInfo = document.createElement('p');
  const deleteButton = document.createElement('button')
  card.classList.add('card');
  container.appendChild(card);
  card.appendChild(cardInfo);
  cardInfo.textContent = `"${library[library.length - 1].title}", written by ${library[library.length - 1].author}. ${library[library.length - 1].pages} pages long, ${library[library.length - 1].read}`;
  card.appendChild(deleteButton);
  deleteButton.textContent = `Delete this book`;
  deleteButton.addEventListener('click', (e) => {
    container.removeChild(card);
    library.splice(this.index, 1);
  });
}



function clearForm() {
  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
  formReadUnread.value = '';
}


const harryPotter = new Book('Harry Potter', 'that napkin lady', '420', 'read already')
const hardyBoys = new Book('The Hardy Boys', 'some pedo', 'like 100', 'ready already')
const thePush = new Book('The Push', 'Tommy Caldwell', '420', 'unread')