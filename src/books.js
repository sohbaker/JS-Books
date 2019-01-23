// jshint esversion: 6
import { ApiRequest } from '../src/api_request';

export class Books {
  constructor() {
    this.apiRequest = new ApiRequest();
  }

  async doSearch(query) {
    const dataReturn = await this.apiRequest.makeCall(query);
    return dataReturn;
  }

  async collectData() {
    let data = await this.doSearch('hello');
    let bookData = []

    data.items.forEach(function(hash) {
      bookData.push({
        title: hash.volumeInfo.title,
        author: hash.volumeInfo.authors[0],
        publisher: hash.volumeInfo.authors.publishedDate,
        image: hash.volumeInfo.imageLinks.thumbnail,
      })
    })
    return bookData;
  }
}
