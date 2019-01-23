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

  it('returns an object containing data about books mathching the search item', async () => {
    const response = await books.doSearch('hello')
    expect(typeof response).toEqual('object');
  });

  it('creates an object containing selected data returned by the search', async () => {
    const response = await books.doSearch('hello')
    const data = books.collectData()
    expect(typeof data).toEqual('object');
  });
});
