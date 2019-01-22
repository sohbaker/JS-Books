// jshint esversion: 6
import { ApiRequest } from '../src/api_request';

describe('ApiRequest', () => {
  let apiCall;
  beforeEach(() => {
    apiCall = new ApiRequest();
  });

  it('creates a new instance of ApiRequest', () => {
    expect(apiCall instanceof ApiRequest).toEqual(true);
  });

  it('searches for a book and returns a response', () => {
    const search = 'children+of+blood+and+bone';
    const response = apiCall.main(search)
    expect(response).toBeDefined();
  });

  it('searches for a specific book and returns data about that book', () => {
    const search = 'children+of+blood+and+bone';
    const response = apiCall.main(search)
    expect(response['items'][0]['volumeInfo']['title']).toEqual('Children of Blood and Bone');
  });
});
