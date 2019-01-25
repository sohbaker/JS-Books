// jshint esversion: 6
import { Books } from './books';

const books = new Books();

async function getSearchResult(query) {
  const displayResult = document.getElementById('search');

  const data = await books.collectData(query);

  data.forEach((obj) => {
    const bookList = document.createElement('div');
    bookList.setAttribute('class', 'list-of-books');

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
    authors.innerHTML = `Author/s: ${obj.authors[0]}`;
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
}

getSearchResult();
