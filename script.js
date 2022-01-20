//DOM TARGETS AND DEFAULT VALUES
const library = [];
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


//BOOK CLASS AND METHODS
class Book {
  constructor (title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  };
  addToLibrary = function () {
    library.push(this);
  };
  changeReadStatus = function () {
    if (this.read === 'Unread') {
      this.read = 'Read';
    } else if (this.read === 'Read') {
      this.read = 'Unread'
    };
  };
};

//EVENT LISTENERS
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

//HELPER FUNCTIONS
function makeCard() {
  const card = document.createElement('div');
  const cardInfo = document.createElement('p');
  const deleteButton = document.createElement('button');
  const readButton = document.createElement('button');
  const cardIndex = library[library.length - 1];
  card.classList.add('card');
  container.appendChild(card);
  card.appendChild(deleteButton);
  deleteButton.classList.add('cardButton');
  deleteButton.textContent = `Delete this book`;
  deleteButton.addEventListener('click', (e) => {
    container.removeChild(card);
    library.splice(this.index, 1);
  });
  card.appendChild(readButton);
  readButton.classList.add('cardButton');
  readButton.classList.add('readButton');
  readButton.textContent = `Change 'Read' status`;
  readButton.addEventListener('click', (e) => {
    cardIndex.changeReadStatus();
    cardInfo.textContent = `"${cardIndex.title}", written by ${cardIndex.author}. ${cardIndex.pages} pages long. ${cardIndex.read}.`;
  });
  card.appendChild(cardInfo);
  cardInfo.textContent = `"${cardIndex.title}", written by ${cardIndex.author}. ${cardIndex.pages} pages long. ${cardIndex.read}.`;
};

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


//PRE-LOADED BOOKS
const paramotorBible = new Book('Powered Paragliding Bible', 'Jeff Goin', '320', 'Read')
paramotorBible.addToLibrary();
makeCard();

const higherEducation = new Book('Higher Education: A Bigwall Climbing Manual', 'Andy Kirkpatrick', '478', 'Read')
higherEducation.addToLibrary();
makeCard();

const stayingAlive = new Book('Staying Alive in Avalanche Terrain', 'Bruce Tremper', '320', 'Read');
stayingAlive.addToLibrary();
makeCard();