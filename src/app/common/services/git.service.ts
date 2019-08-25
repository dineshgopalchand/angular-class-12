import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService extends DataService {

  constructor(http: HttpClient) {
    super(http, environment.url.git);
  }

  getRepoList(username: string) {
    // https://api.github.com/users/alxhub/repos
    return this.http.get(this.urlVal + username + '/repos')
      .pipe(catchError(this.errorHandler));
  }
  getFollowersList(username) {
    // https://api.github.com/users/alxhub/repos
    return this.http.get(this.urlVal + username + '/followers')
      .pipe(catchError(this.errorHandler));
  }
  getUserProfile(username) {
    // https://api.github.com/users/alxhub/repos
    return this.http.get(this.urlVal + username)
      .pipe(catchError(this.errorHandler));
  }
}
