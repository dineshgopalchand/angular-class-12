import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FavOutput } from '../fav/fav.component';

@Component({
  selector: 'app-reusable-demo',
  // templateUrl: './reusable-demo.component.html',
  // template: '<!-- <app-fav></app-fav> -->\
  // <div class="card" *ngFor="let post of postList">\
  //     <h5 class="card-header">{{post.name}}</h5>\
  //     <div class="card-body">\
  //         <!-- <h5 class="card-title">Special title treatment</h5> -->\
  //         <p class="card-text">\
  //             {{post.postdetails}}\
  //         </p>\
  //         <div>\
  //             <app-fav [like-count]="post.likecount" [like-Check]="post.like" (favChange)="favChangeFunction($event)"></app-fav>\
  //         </div>\
  //     </div>\
  // </div>',
  // template: `<!-- <app-fav></app-fav> -->
  // <div class="card" *ngFor="let post of postList">
  //     <h5 class="card-header">{{post.name}}</h5>
  //     <div class="card-body">
  //         <!-- <h5 class="card-title">Special title treatment</h5> -->
  //         <p class="card-text">
  //             ------{{post.postdetails}}
  //         </p>
  //         <div>
  //             <app-fav [like-count]="post.likecount" [like-Check]="post.like" (favChange)="favChangeFunction($event)"></app-fav>
  //         </div>
  //     </div>
  // </div>`,
  templateUrl: './reusable-demo.component.html',
  styleUrls: ['./reusable-demo.component.css'],
  styles: [`.card-body{background-color:#E1E1E1}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class ReusableDemoComponent implements OnInit {

  postList: any = [];
  constructor() { }

  ngOnInit() {
    this.postList = [
      {
        id: 1,
        name: 'Post Name1',
        postdetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum. ',
        likecount: 34,
        like: true

      },
      {
        id: 3,
        name: 'Post Name 3',
        postdetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum. ',
        likecount: 84,
        like: false
      },
      {
        id: 4,
        name: 'Post Name 4',
        postdetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum. ',
        likecount: 38,
        like: true
      }
    ];
  }
  favChangeFunction(event: FavOutput) {
    console.log('favChangeFunction()', event);
  }

}
