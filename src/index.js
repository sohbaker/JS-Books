// jshint esversion: 6
import { Book } from './book';
import { SearchResult } from './search_result';

function clearPage() {
  const container = document.getElementById('container');
  const resultsShowing = document.getElementById('container').hasChildNodes();
  if (resultsShowing) {
    document.getElementById('container').removeChild(container.firstChild);
  }
}

async function displayBooks(result) {
  clearPage();
  const container = document.getElementById('container');
  const displayResult = document.createElement('div');
  displayResult.setAttribute('class', 'display-results');

  result.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('class', 'single-book');

    const thumbnail = document.createElement('p');
    thumbnail.setAttribute('class', 'thumbnail');
    thumbnail.innerHTML = `<img src='${book.image}' alt='image of book cover' class='thumbnail'/>`;
    bookDiv.appendChild(thumbnail);

    const title = document.createElement('p');
    title.innerHTML = `<strong>Title: </strong>${book.title}`;
    bookDiv.appendChild(title);

    const authors = document.createElement('p');
    authors.innerHTML = `<strong>Author/s: </strong>${book.authors}`;
    bookDiv.appendChild(authors);

    const publisher = document.createElement('p');
    publisher.innerHTML = `<strong>Publisher: </strong>${book.publisher}`;
    bookDiv.appendChild(publisher);

    const link = document.createElement('p');
    link.innerHTML = `<a href= ${book.link} target='_blank'><strong>More Info</strong></a>`;
    bookDiv.appendChild(link);

    displayResult.appendChild(bookDiv);
  });
  container.appendChild(displayResult);
}

// function displaySingleBook() {
//
// }

function displayErrorMessage() {
  clearPage();
  const container = document.getElementById('container');
  const errorMessage = document.createElement('div');
  errorMessage.setAttribute('class', 'error-message');
  errorMessage.innerHTML = 'invalid search, please try again';
  container.appendChild(errorMessage);
}

async function searchHandler() {
  const searchTerm = document.getElementById('input-field');
  const result = new SearchResult(searchTerm.value);
  const success = await result.doSearch()
  if (!success.error) {
    searchTerm.value = '';
    displayBooks(result.createBookObject());
  } else {
    displayErrorMessage();
  }
}

document.getElementById('search-btn').addEventListener('click', searchHandler);
document.getElementById('input-field').addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    searchHandler();
  }
}, false);
