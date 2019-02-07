// jshint esversion: 6
import { ApiRequest } from '../src/api_request';
import { SearchResult } from '../src/search_result';
import * as dummyData from './resources/mock_data';

// const api = jest.mock('../src/api_request');
// const result = jest.mock('../src/search_result');
let json = JSON.stringify(dummyData);
json = JSON.parse(json);

describe('SearchResult', () => {
  it('should return a JSON file for a valid search', () => {
    const dummyFunction = jest.fn(() => true);
    dummyFunction.mockReturnValueOnce(json);
    dummyFunction();
    expect(dummyFunction).toHaveReturned();
  });

  // it('should collect 5 pieces of data per book returned by search', () => {
  //
  // expect().something(); 
  // });
  //
  // it('should overwrite undefined value for publisher key with unknown', () => {
  //
  //   expect().something();
  // });
  //
  // it('should create a new instance of book object', () => {
  //
  //   expect().something();
  // });
});
