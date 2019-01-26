// jshint esversion: 6
import { Books } from './books';

const books = new Books();

async function displayBooks(query) {
  if (query !== undefined) {
    const container = document.getElementById('results-container');
    const displayResult = document.createElement('div');
    displayResult.setAttribute('id', 'books-result');

    const data = await books.collectData(query);
    data.forEach((obj) => {
      const bookList = document.createElement('div');
      bookList.setAttribute('class', 'single-book');

      const thumb = document.createElement('p');
      thumb.setAttribute('id', 'thumbnail');
      thumb.innerHTML = `<img src='${obj.image}' alt='image of ${obj.title}' class='thumbnail'/>`;
      bookList.appendChild(thumb);

      const title = document.createElement('p');
      title.setAttribute('id', 'title');
      title.innerHTML = `Title: ${obj.title}`;
      bookList.appendChild(title);

      const authors = document.createElement('p');
      authors.setAttribute('id', 'authors');
      if (obj.authors === undefined) {
        authors.innerHTML = 'Author unknown';
      } else {
        authors.innerHTML = `Author/s: ${obj.authors}`;
      }
      bookList.appendChild(authors);

      const publisher = document.createElement('p');
      publisher.setAttribute('id', 'publisher');
      if (obj.publisher === undefined) {
        publisher.innerHTML = 'Publisher unknown';
      } else {
        publisher.innerHTML = `Publisher: ${obj.publisher}`;
      }
      bookList.appendChild(publisher);

      const link = document.createElement('p');
      link.setAttribute('id', 'link');
      link.innerHTML = `<a href= ${obj.link}>More Info</a>`;
      bookList.appendChild(link);

      displayResult.appendChild(bookList);
    });
    container.appendChild(displayResult);
  }
}

function getInput() {
  const container = document.getElementById('results-container');
  const searchResults = document.getElementById('results-container').hasChildNodes();
  if (searchResults === true) {
    document.getElementById('results-container').removeChild(container.firstChild);
  }
  const search = document.getElementById('input-field');
  displayBooks(search.value);
  search.value = '';
}

document.getElementById('search-btn').addEventListener('click', getInput);
