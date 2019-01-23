// jshint esversion: 6
import { ApiRequest } from '../src/api_request';

describe('ApiRequest', () => {
  let request;
  beforeEach(() => {
    request = new ApiRequest();
  });

  it('creates a new instance of ApiRequest', () => {
    expect(request instanceof ApiRequest).toEqual(true);
  });

  it('searches for a book and returns a response', async () => {
    const search = 'children+of+blood+and+bone';
    const response = await request.makeCall(search)
    expect(response).toBeDefined();
  });

  it('searches for a specific book and returns data about that book', async () => {
    const search = 'children+of+blood+and+bone';
    const response = await request.makeCall(search)
    expect(response['items'][0]['volumeInfo']['title']).toEqual('Children of Blood and Bone');
  });
});
