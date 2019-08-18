import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { JSONtype } from '../helper/json.type';


export class DataService {

  constructor(protected http: HttpClient, protected urlVal: string) { }

  getAll() {
    return this.http.get(this.urlVal);
  }

  create(body: JSONtype) {
    return this.http.post(this.urlVal, body);
  }

  delete(id: any) {
    return this.http.delete(this.urlVal + '/' + id);
  }

  update(body: JSONtype) {
    return this.http.put(this.urlVal + '/' + body.id, body);
    // return this.http.patch(url.post + '/' + body.id, body);
  }
}
