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

  it('can make a request to books api', async () => {
    const response = await books.doSearch('test')
    expect(response).toBeDefined();
  });

  it('returns an object containing books matching the search term', async () => {
    const response = await books.doSearch('hello')
    expect(typeof response).toEqual('object');
  });

  it('creates an object containing selected data returned by the search', async () => {
    const data = books.collectData('hello')
    expect(typeof data).toEqual('object');
  });

  it('collects specific data returned by the search such as the book title', async () => {
    const data = await books.collectData('goodbye')
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          author: expect.any(String),
          publisher: expect.anything(),
        }),
      ]),
    );
  });
});
