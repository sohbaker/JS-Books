// jshint esversion: 6
import { ApiRequest } from './api_request';

export class Books {
  constructor() {
    this.apiRequest = new ApiRequest();
  }

  async doSearch(query) {
    const dataReturn = await this.apiRequest.makeCall(query);
    return dataReturn;
  }

  async collectData() {
    const data = await this.doSearch(input);
    const bookData = [];

    data.items.forEach((hash) => {
      bookData.push({
        title: hash.volumeInfo.title,
        authors: hash.volumeInfo.authors,
        publisher: hash.volumeInfo.publisher,
        thumbnail: hash.volumeInfo.imageLinks.thumbnail,
        link: hash.volumeInfo.canonicalVolumeLink,
      });
    });
    return bookData;
  }
}
