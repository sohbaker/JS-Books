// jshint esversion: 6
const fetch = require('node-fetch');
require('dotenv').config();

export class ApiRequest {
  async makeCall(search) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    try {
      const response = await fetch(`${url}&key=${process.env.API_KEY}`);
      const data = await response.json();
      if (!data) return 'book not found';
      return data;
    } catch (error) {
      return `Unexpected error occurred: ${error}`;
    }
  }
}
