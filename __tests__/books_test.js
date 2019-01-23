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
    const response = await books.getData('test')
    expect(response).toBeDefined();
  });

  it('returns data about the search item', async () => {
    const response = await books.getData('five+love+languages')
    expect(response['items'][0]['volumeInfo']['title']).toEqual('The Five Love Languages');
  });
});
