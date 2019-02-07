// jshint esversion: 6
import * as book from '../src/book';

describe('book', () => {
  it('constructs a book object', async () => {
    const result = book.createNewBook('hello world', 'sam jane', 'publish house', 'thumbnail', 'www.hi.com');

    expect(result).toEqual({
      title: 'hello world',
      authors: 'sam jane',
      publisher: 'publish house',
      thumbnail: 'thumbnail',
      link: 'www.hi.com',
    });
  });
});
