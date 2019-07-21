import { Component, OnInit, DoCheck } from '@angular/core';
import { CourseService } from 'src/course.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit, DoCheck {
  courseList: any[] = [];
  activePage = 'course';
  formatType = 'uppercase';
  constructor(private course: CourseService) { }

  ngOnInit() {
    this.courseList = JSON.parse(JSON.stringify(this.course.courseList));
  }
  ngDoCheck() {
    if (this.courseList !== this.course.courseList) {
      this.courseList = JSON.parse(JSON.stringify(this.course.courseList));
    }
  }
  addNewTitle(titleInput: HTMLInputElement) {
    const data = { name: titleInput.value, id: Math.floor(Date.now() / 10000) };
    // const data = { name: 'vgvb', id: 1563 };
    // console.log(this.course.courseList.splice(0, 0, data));
    // setTimeout(() => {
    this.course.courseList.splice(0, 0, data);
    // });

    // console.log(data);
    // console.log(this.course.courseList);
    titleInput.value = '';

  }
  removeItem(item: any) {
    const indexVal = this.courseList.indexOf(item);
    this.course.courseList.splice(indexVal, 1);
  }

}
