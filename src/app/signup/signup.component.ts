import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserValidator } from '../common/validator/user-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUp = new FormGroup({
      uname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        // Validators.pattern(/^[a-zA-z]+$/),
        UserValidator.shouldContainSpace
      ], UserValidator.uniqueUser),
      pass: new FormControl('', Validators.required)
    });
    console.log(this.signUp);
  }
  unameInput() {
    console.log(this.signUp.get('uname').errors);
  }
  get userName() {
    return this.signUp.get('uname');
  }

}
