// jshint esversion: 6
import { Books } from '../src/books';

describe('Books', () => {
  let books;
  beforeEach(() => {
    books = new Books();
  });

  it('creates a new instance of Books', () => {
    expect(books instanceof Books).toEqual(true);
  });
});
