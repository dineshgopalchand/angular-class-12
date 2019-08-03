import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  selectedMailingOption = 2;
  mailingOption = [
    { id: 1, option: 'Email' },
    { id: 2, option: 'SMS' },
    { id: 3, option: 'WhatsApp' },
    { id: 4, option: 'Post' },
    { id: 5, option: 'Call' },
    { id: 6, option: 'Hike' }
  ];

  constructor() { }

  ngOnInit() {
  }

  inputChange(input: NgModel) {
    console.log(input);
  }
  formSubmit(form: NgForm) {
    console.log(form);
    // form.controls.firstname.setErrors(
    //   { serverError: true }
    // );
    // form.control.setErrors({
    //   formCustomErr: {
    //     status: true,
    //     message: 'Some custom message'
    //   }
    // });
  }

}
