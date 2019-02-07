// jshint esversion: 6
import { ApiRequest } from '../src/api_request';
import { SearchResult } from '../src/search_result';

jest.mock('../src/api_request');

describe('ApiRequest', () => {
  beforeEach(() => {
    ApiRequest.mockClear();
  });

  it('checks whether doSearch function makes an API request', () => {
    const searchResult = new SearchResult();
    expect(ApiRequest).toHaveBeenCalledTimes(1);

    const search = 'children+of+blood+and+bone';
    searchResult.doSearch(search);
    const mockApiRequestInstance = ApiRequest.mock.instances[0];
    const mockMakeCall = mockApiRequestInstance.makeCall;
    expect(mockMakeCall).toHaveBeenCalledTimes(1);
  });
});
