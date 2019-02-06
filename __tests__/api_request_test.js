// jshint esversion: 6
import { ApiRequest } from '../src/api_request';
import { Books } from '../src/books';

jest.mock('../src/api_request');

describe('ApiRequest', () => {
  beforeEach(() => {
    ApiRequest.mockClear();
  });

  it('checks that mock is working', () => {
    expect(ApiRequest).not.toHaveBeenCalled();
  });

  it('checks whether doSearch function makes an API request', () => {
    const books = new Books();
    expect(ApiRequest).toHaveBeenCalledTimes(1);

    const search = 'children+of+blood+and+bone';
    books.doSearch(search);
    const mockApiRequestInstance = ApiRequest.mock.instances[0];
    const mockMakeCall = mockApiRequestInstance.makeCall;
    expect(mockMakeCall).toHaveBeenCalledTimes(1);
  });
});
