// jshint esversion: 6
import { ApiRequest } from '../src/api_request';
import { SearchResult } from '../src/search_result';

jest.mock('../src/api_request');
jest.mock('../src/search_result');

describe('SearchResult', () => {
  beforeEach(() => {
    ApiRequest.mockClear();
    SearchResult.mockClear();
  });

  it('checks whether doSearch function returns a result', () => {
    const searchResult = new SearchResult('foo');
    searchResult.doSearch();
    expect(ApiRequest).toHaveBeenCalledTimes(1);

    const search = 'children+of+blood+and+bone';
    searchResult.doSearch(search);
    const mockApiRequestInstance = ApiRequest.mock.instances[0];
    const mockMakeCall = mockApiRequestInstance.makeCall;
    expect(mockMakeCall).toHaveBeenCalledTimes(1);
  });
});



// data = require(json file)
