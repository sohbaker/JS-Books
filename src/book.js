// jshint esversion: 6
export function createNewBook(title, authors, publisher, thumbnail, link) {
  const obj = {};
  obj.title = title;
  obj.authors = authors;
  obj.publisher = publisher;
  obj.thumbnail = thumbnail;
  obj.link = link;
  return obj;
}
