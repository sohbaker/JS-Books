// jshint esversion: 6
import { Books } from './books';

const books = new Books();

async function displayBooks(query) {
  const container = document.getElementById('container');

  if (query !== undefined) {
    const displayResult = document.createElement('div');
    displayResult.setAttribute('class', 'display-results');

    const data = await books.collectData(query);
    data.forEach((obj) => {
      const bookList = document.createElement('div');
      bookList.setAttribute('class', 'single-book');

      const thumb = document.createElement('p');
      thumb.setAttribute('class', 'thumbnail');
      thumb.innerHTML = `<img src='${obj.image}' alt='image of ${obj.title}' class='thumbnail'/>`;
      bookList.appendChild(thumb);

      const title = document.createElement('p');
      title.setAttribute('class', 'title');
      title.innerHTML = `Title: ${obj.title}`;
      bookList.appendChild(title);

      const authors = document.createElement('p');
      authors.setAttribute('class', 'authors');
      if (obj.authors === undefined) {
        authors.innerHTML = 'Author unknown';
      } else {
        authors.innerHTML = `Author/s: ${obj.authors}`;
      }
      bookList.appendChild(authors);

      const publisher = document.createElement('p');
      publisher.setAttribute('class', 'publisher');
      if (obj.publisher === undefined) {
        publisher.innerHTML = 'Publisher unknown';
      } else {
        publisher.innerHTML = `Publisher: ${obj.publisher}`;
      }
      bookList.appendChild(publisher);

      const link = document.createElement('p');
      link.setAttribute('class', 'link');
      link.innerHTML = `<a href= ${obj.link}>More Info</a>`;
      bookList.appendChild(link);

      displayResult.appendChild(bookList);
    });
    container.appendChild(displayResult);
  }
}

function getInput() {
  const container = document.getElementById('container');
  const searchResults = document.getElementById('container').hasChildNodes();
  if (searchResults === true) {
    document.getElementById('container').removeChild(container.firstChild);
  }
  const search = document.getElementById('input-field');
  displayBooks(search.value);
  search.value = '';
}

document.getElementById('search-btn').addEventListener('click', getInput);
