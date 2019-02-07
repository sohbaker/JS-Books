// jshint esversion: 6
import { ApiRequest } from './api_request';
import * as book from './book';
require('promise');
require('promise/lib/rejection-tracking').enable();
const clonedeep = require('lodash.clonedeep')

export class SearchResult {
  constructor(query) {
    this.apiRequest = new ApiRequest();
    this.query = query;
  }

  async doSearch() {
    const data = await this.apiRequest.makeCall(this.query);
    return new Promise((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        const reason = new Error();
        reject(reason);
      }
    });
  }

  async collectData() {
    const response = await this.doSearch();
    const dataArray = [];

    response.items.forEach((hash) => {
      dataArray.push({
        title: hash.volumeInfo.title,
        authors: hash.volumeInfo.authors,
        publisher: hash.volumeInfo.publisher,
        thumbnail: hash.volumeInfo.imageLinks.thumbnail,
        link: hash.volumeInfo.canonicalVolumeLink,
      });
    });
    return dataArray;
  }

  async addPublisherUnknown() {
    const dataToClean = await this.collectData();
    const clonedData = clonedeep(dataToClean);
    clonedData.forEach((hash) => {
      if (hash.publisher === undefined) {
        hash.publisher = 'unknown';
      }
    });
    return clonedData;
  }

  // async createBookObject() {
  //   const cleanData = await this.addPublisherUnknown();
  //   cleanData.forEach((hash) => {
  //     const singleBook = book.createNewBook(hash.title, hash.authors, hash.publisher, hash.thumbnail, hash.link);
  //   });
  //   return singleBook;
  // }
}
