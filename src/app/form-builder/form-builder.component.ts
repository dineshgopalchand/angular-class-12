import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  signUp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.signUp = new FormGroup({
    //   name: new FormControl(),
    //   topics: new FormArray([]),
    //   contact: new FormGroup({
    //     email: new FormControl(),
    //     phone: new FormControl()
    //   })
    // });
    this.signUp = this.fb.group({
      name: ['', Validators.required],
      topics: this.fb.array([]),
      contact: this.fb.group({
        email: [],
        phone: []
      })
    });

  }

}
