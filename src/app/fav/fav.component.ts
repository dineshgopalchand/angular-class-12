import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('like-count') likecount: number;
  // tslint:disable-next-line:no-input-rename
  @Input('like-Check') likeCheck: boolean;
  // likeCheck = false;
  // likecount = 54;
  // tslint:disable-next-line:no-output-rename
  @Output('favChange') change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  favClick() {
    this.likeCheck = !this.likeCheck;
    if (this.likeCheck) {
      this.likecount++;
    } else {
      this.likecount--;
    }
    const emittedValue: FavOutput = {
      likecount: this.likecount,
      username: 'Dinesh',
      like: this.likeCheck
    };
    this.change.emit(emittedValue);
    console.log('like cliked');
  }


}

export class FavOutput {
  likecount: number;
  username: string;
  like: boolean;
}

