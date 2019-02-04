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

      const thumbnail = document.createElement('p');
      thumbnail.setAttribute('class', 'thumbnail');
      thumbnail.innerHTML = `<img src='${obj.image}' alt='image of book cover' class='thumbnail'/>`;
      bookList.appendChild(thumbnail);

      const title = document.createElement('p');
      title.setAttribute('class', 'title');
      title.innerHTML = `<strong>Title:</strong> ${obj.title}`;
      bookList.appendChild(title);

      const authors = document.createElement('p');
      authors.setAttribute('class', 'authors');
      if (obj.authors === undefined) {
        authors.innerHTML = '<i>Author unknown</i>';
      } else {
        authors.innerHTML = `<strong>Author/s:</strong> ${obj.authors}`;
      }
      bookList.appendChild(authors);

      const publisher = document.createElement('p');
      publisher.setAttribute('class', 'publisher');
      if (obj.publisher === undefined) {
        publisher.innerHTML = '<i>Publisher unknown</i>';
      } else {
        publisher.innerHTML = `<strong>Publisher:</strong> ${obj.publisher}`;
      }
      bookList.appendChild(publisher);

      const moreInfoLink = document.createElement('p');
      moreInfoLink.setAttribute('class', 'link');
      moreInfoLink.innerHTML = `<a href= ${obj.link} target='_blank'><strong>More Info</strong></a>`;
      bookList.appendChild(moreInfoLink);

      displayResult.appendChild(bookList);
    });
    container.appendChild(displayResult);
  }
}

function getInput() {
  const container = document.getElementById('container');
  const resultsShowing = document.getElementById('container').hasChildNodes();
  if (resultsShowing === true) {
    document.getElementById('container').removeChild(container.firstChild);
  }
  const search = document.getElementById('input-field');
  displayBooks(search.value);
  search.value = '';
}

document.getElementById('search-btn').addEventListener('click', getInput);
