import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    courseList = [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' },
        { id: 4, name: 'JavaScript' },
        { id: 5, name: 'NodeJS' },
        { id: 5, name: 'Python' }
    ];
}
