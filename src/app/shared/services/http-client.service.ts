import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpClientService {

  constructor(public  http: HttpClient) { }

  /**
   * @desc  Set HTTP Headers
   */
  setHeaders() {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }


  /**
   * @desc    Set Search Prameters
   * @params  params
   */
  setParams(params) {
    return params || new HttpParams();
  }


  /**
   * @desc  Method to invoke get api call
   * @param {string} url    Api Url
   * @param params
   */
  get(url: string, params: any = null) {

    const headers = this.setHeaders();
    params = this.setParams(params);

    return this.http.get(url, {headers, params});
  }
}
