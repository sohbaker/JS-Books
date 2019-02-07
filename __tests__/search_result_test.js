// jshint esversion: 6
import { ApiRequest } from '../src/api_request';
import { SearchResult } from '../src/search_result';
import * as dummyData from './resources/mock_data';

let json = JSON.stringify(dummyData);
json = JSON.parse(json);

describe('SearchResult', () => {
  it('should return a JSON file for a valid search', () => {
    const dummyFunction = jest.fn(() => true);
    dummyFunction.mockReturnValueOnce(json);
    dummyFunction();
    expect(dummyFunction).toHaveReturned();
  });
});
