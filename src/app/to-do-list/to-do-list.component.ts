import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  taskForm: FormGroup;
  toDoList: FormGroup;
  constructor() { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required)
    });
    this.toDoList = new FormGroup({
      list: new FormArray([])
    });
  }

  newTaskSubmit() {
    // console.log(this.taskForm.value);

    // this.list.push(
    //   new FormGroup({
    //     title: new FormControl(this.taskForm.value.title),
    //     details: new FormControl(this.taskForm.value.details),
    //     status: new FormControl(1)
    //   })
    // );
    this.list.controls.splice(0, 0, (
      new FormGroup({
        title: new FormControl(this.taskForm.value.title),
        details: new FormControl(this.taskForm.value.details),
        status: new FormControl(1)
      })
    ));
    // console.log(this.toDoList);
    this.taskForm.reset();

  }
  get list() {
    return this.toDoList.get('list') as FormArray;
  }
  deleteTask(item: FormGroup) {
    const indexVal = this.list.controls.indexOf(item);
    this.list.removeAt(indexVal);
  }

  markCheck(item: FormGroup) {
    const indexVal = this.list.controls.indexOf(item);
    ((this.list.controls[indexVal]) as FormGroup).get('status').setValue(0);
  }

}
