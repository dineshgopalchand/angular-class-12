import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  get courseList() {
    return [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'HTML' },
      { id: 3, name: 'CSS' },
      { id: 4, name: 'JavaScript' },
      { id: 5, name: 'NodeJS' },
      { id: 6, name: 'Python' },
      { id: 7, name: 'Java' }
    ];
  }
}
