import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-and-event2',
  templateUrl: './data-and-event2.component.html',
  styleUrls: ['./data-and-event2.component.css']
})
export class DataAndEvent2Component implements OnInit {

  isActive = false;
  nameVal = 'SDLC';
  constructor() { }

  ngOnInit() {
    // setInterval(() => {
    //   this.isActive = !this.isActive;
    // }, 500);
  }
  userClick() {
    this.isActive = !this.isActive;
    console.log('user have clicked');
  }
  buttonCLicked(event: MouseEvent) {
    event.stopPropagation();
    console.log(event);
  }
  parentClick() {
    console.log('parent get clicked');
  }
  // submitUsername(event: KeyboardEvent) {
  //   console.log(event);
  //   if (event.keyCode === 13) {
  //     console.log((event.target as HTMLInputElement).value);
  //   }
  // }
  // submitUsername(username: HTMLInputElement) {
  //   this.nameVal = username.value;
  //   console.log(username.value);
  // }
  submitUsername() {
    console.log(this.nameVal);
  }
}
