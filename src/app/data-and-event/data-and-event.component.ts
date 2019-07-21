import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-and-event',
  templateUrl: './data-and-event.component.html',
  styleUrls: ['./data-and-event.component.css']
})
export class DataAndEventComponent implements OnInit {

  title = 'Courses';
  formattedTitle = '<b>Courses</b>';
  imgSrc = 'https://dummyimage.com/200x150/1c1a66/fff.png';
  colspan = 2;
  rowspan = 2;
  constructor() { }

  ngOnInit() {
  }

}
