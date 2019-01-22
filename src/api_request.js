// jshint esversion: 6
const request = require('request-promise');

const yourAPIKey = 'AIzaSyA9aYlRmmcP0C_Mb5iqFd-mhxNJmndNUsw';

export class ApiRequest {
  initialize(search) {
    const options = {
      url: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${yourAPIKey}`,
      headers: {
        'User-Agent': 'request',
      },
    };

    const myPromise = new Promise((resolve, reject) => {
      request.get(options, (err, resp, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      });
    });
    return myPromise;
  }

  main(search) {
    const initializePromise = this.initialize(search);
    initializePromise.then((result) => {
      const bookData = result;
      console.log('Initialized book data');
      return bookData;
    }, (err) => {
      const message = `Unexpected error occurred: ${err}`;
      return message;
    });
  }
}

const api = new ApiRequest();
api.main();
