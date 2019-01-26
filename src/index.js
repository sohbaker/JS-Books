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
      authors.innerHTML = `Author/s: ${obj.authors}`;
      bookList.appendChild(authors);

      const publisher = document.createElement('p');
      publisher.setAttribute('id', 'publisher');
      if (obj.publisher === null) {
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

function resetForm() {
  const btn = document.getElementById('new-search-btn');
  btn.parentNode.removeChild(btn);
  const booksDiv = document.getElementById('books-result');
  booksDiv.parentNode.removeChild(booksDiv);
  document.getElementById('input-field').value = '';
}

function getInput() {
  const searchValue = document.getElementById('input-field');
  let input = '';

  const inputForm = document.getElementById('get-input');

  searchValue.addEventListener('keydown', (e) => {
    if (e.keyCode !== 13 && e.keyCode !== 8 && e.keyCode !== 46) {
      input += e.key;
    } else if (e.keyCode === 8 || e.keyCode === 46) {
      const chars = input.split('');
      chars.pop();
      input = chars.join('');
    } else if (e.keyCode === 13) {
      const btn = document.createElement('button');
      btn.setAttribute('id', 'new-search-btn');
      btn.innerHTML = 'New Search';
      inputForm.appendChild(btn);
      displayBooks(input);
      input = '';
      document.getElementById('new-search-btn').addEventListener('click', resetForm);
    }
  });
}

getInput();
displayBooks();
