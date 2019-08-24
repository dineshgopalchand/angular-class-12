import { Component, OnInit } from '@angular/core';
import { Post } from '../common/helper/posts.type';

import { PostService } from '../common/services/post.service';
import { NotFoundError } from '../common/errors/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  userId = 2;
  newPost: Post = {} as Post;
  notificationMessage = '';

  constructor(private dataService: PostService) { }

  ngOnInit() {
    this.resetNewPost();
    this.dataService.getAll()
      .subscribe(
        res => {
          console.log(res);
          this.posts = res as Post[];
        }
        // ,
        // error => {
        //   // console.log(error);
        //   if (error instanceof NotFoundError) {
        //     // show toast notification for not found
        //     console.log('not found error');
        //   }
        // }, () => {
        //   console.log('its completed');
        // }
      );
  }
  resetNewPost() {
    this.newPost.body = '';
    this.newPost.title = '';
    this.newPost.userId = this.userId;
  }
  createPost() {
    console.log(this.newPost);
    this.dataService.create(this.newPost)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(0, 0, res as Post);
        this.resetNewPost();
      });
  }
  deletePost(post: Post) {
    console.log(post);
    const indexVal = this.posts.indexOf(post);
    this.dataService.delete(post.id)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(indexVal, 1);
        this.createNotificationMessage('Record deleted successfully');
      });
  }

  updatePost(post: Post) {
    const indexVal = this.posts.indexOf(post);
    const updatedPost: Post = Object.assign({}, post);
    // const updatedPost = {} as Post;
    updatedPost.title = post.title + '---updated';
    // updatedPost.id = post.id;
    console.log('new updateed value', updatedPost);
    this.dataService.update(updatedPost)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(indexVal, 1, (res as Post));
      });
  }


  createNotificationMessage(message: string) {
    this.notificationMessage = message;
    setTimeout(() => {
      this.notificationMessage = '';
    }, 1500);
  }

}
