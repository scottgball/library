const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  };

Book.prototype.addToLibrary = function () {
  library.push(this);
};

Book.prototype.changeReadStatus = function () {
  if (this.read === 'Unread') {
    this.read = 'Read';
  } else if (this.read === 'Read') {
    this.read = 'Unread'
  };
};

const addButton = document.querySelector('#addButton');
const formTitle = document.querySelector('#formTitle');
const formAuthor = document.querySelector('#formAuthor');
const formPages = document.querySelector('#formPages');
let formReadUnread = 'Unread';
const form = document.querySelector('form');
const container = document.querySelector('.container');
const radios = document.querySelectorAll('input[name="readUnread"]');
const readButtons = document.querySelectorAll('.readButton');
const entryForm = document.querySelector('#entryForm');

addButton.addEventListener('click', openForm);

radios.forEach((radio) => {
  radio.addEventListener('click', (e) => {
  formReadUnread = radio.value;
  });
});

form.onsubmit = function() {
  const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formReadUnread);
  newBook.addToLibrary();
  event.preventDefault();
  makeCard();
  clearForm();
  closeForm();
};

function makeCard() {
  const card = document.createElement('div');
  const cardInfo = document.createElement('p');
  const deleteButton = document.createElement('button');
  const readButton = document.createElement('button');
  const cardIndex = library[library.length - 1];
  card.classList.add('card');
  container.appendChild(card);
  card.appendChild(cardInfo);
  cardInfo.textContent = `"${cardIndex.title}", written by ${cardIndex.author}. ${cardIndex.pages} pages long. ${cardIndex.read}.`;
  card.appendChild(deleteButton);
  deleteButton.textContent = `Delete this book`;
  deleteButton.addEventListener('click', (e) => {
    container.removeChild(card);
    library.splice(this.index, 1);
  });
  card.appendChild(readButton);
  readButton.classList.add('readButton');
  readButton.textContent = `Change 'Read' status`;
  readButton.addEventListener('click', (e) => {
    cardIndex.changeReadStatus();
    cardInfo.textContent = `"${cardIndex.title}", written by ${cardIndex.author}. ${cardIndex.pages} pages long. ${cardIndex.read}.`;
  });
}



function clearForm() {
  formTitle.value = '';
  formAuthor.value = '';
  formPages.value = '';
};

function openForm() {
  entryForm.style.display = "block";
};

function closeForm() {
  entryForm.style.display = "none";
};

// const harryPotter = new Book('Harry Potter', 'that napkin lady', '420', 'read already')
// const hardyBoys = new Book('The Hardy Boys', 'some pedo', 'like 100', 'ready already')
// const thePush = new Book('The Push', 'Tommy Caldwell', '420', 'unread')