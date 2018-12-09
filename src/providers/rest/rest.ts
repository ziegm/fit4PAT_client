import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://localhost:8080/fit4PAT/baseDstu3';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  /**
   * http.get() returns an Observable, which encapsulates the json response returned by the fit4PAT-server.
   * getPatients() then returns a Promise, holding this Observable.
   * For more information about asynchronous programming in JavaScript
   * see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise
   */
  getPatients() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/Patient').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}