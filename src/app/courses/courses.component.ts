import { Component, OnInit } from '@angular/core';
// import { CourseService } from 'src/course.service';
import { CoursesService } from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Courses List';
  courses = [];
  constructor(private courseService: CoursesService) {
    this.courses = this.courseService.courseList;
  }

  ngOnInit() {
    // this.courses = this.courseService.getCourseList();
  }
  getTitleInUppercase() {
    return this.title.toUpperCase();
  }

}
