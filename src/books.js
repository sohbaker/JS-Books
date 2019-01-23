// jshint esversion: 6
import { ApiRequest } from '../src/api_request';

export class Books {
  constructor() {
    this.apiRequest = new ApiRequest();
  }

  async getData(search) {
    const dataReturn = await this.apiRequest.makeCall(search);
    return dataReturn;
  }
}
