// jshint esversion: 6
import { Books } from './books';

const books = new Books();

async function getSearchResult() {
  const displayResult = document.getElementById('search');

  const data = await books.collectData('hello');

  data.forEach((obj) => {
    let bookList = document.creatElement('div')
    bookList.setAttribute('class', 'list-of-books')

    let title = document.creatElement('p')
    title.setAttribute('id', 'title')
    title.innerHTML = "Title:" + thetitle
    bookList.appendChild(title)

    let author = document.creatElement('p')
    author.setAttribute('id', 'author')
    author.innerHTML = "Author/s:" + theauthorwithcommas
    bookList.appendChild(authors)

    let publisher = document.creatElement('p')
    publisher.setAttribute('id', 'publisher')
      if(publisher === 'undefined') {
        publisher.innerHTML = "Publisher unknown"
      } else if (publisher !== 'undefined') {
        publisher.innerHTML = "Publisher:" + publisherinfo
      }
    bookList.appendChild(publisher)

    let link = document.creatElement('p')
    link.setAttribute('id', 'link')
    link.innerHTML = "<a href=" + link + ">More Info</a>"
    bookList.appendChild(link)
  })
  displayResult.appendChild(bookList)
};
