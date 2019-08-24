import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { url } from '../config/url.config';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super(http, environment.url.post );
  }
}
