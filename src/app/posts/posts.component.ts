import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../common/helper/posts.type';
import { url } from '../common/config/url.config';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(url.post)
      .subscribe(res => {
        console.log(res);
        this.posts = res as Post[];
      });
  }

}
