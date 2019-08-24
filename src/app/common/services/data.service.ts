import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { JSONtype } from '../helper/json.type';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { BadInputError } from '../errors/bad-input-error';


export class DataService {

  constructor(protected http: HttpClient, protected urlVal: string) { }

  getAll() {
    return this.http.get(this.urlVal)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(body: JSONtype) {
    return this.http.post(this.urlVal, body)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id: any) {
    return this.http.delete(this.urlVal + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(body: JSONtype) {
    return this.http.put(this.urlVal + '/' + body.id, body)
      .pipe(
        catchError(this.errorHandler)
      );
    // return this.http.patch(url.post + '/' + body.id, body);
  }
  protected errorHandler(error: Response) {
    // console.log(error);
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else
      if (error.status === 400) {
        return throwError(new BadInputError(error));
      } else {
        return throwError(new AppError(error));
      }

  }
}
