import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css'],
})
export class DrivenFormComponent implements OnInit {
  @ViewChild('formDriven') signUpForm: NgForm;
  public subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = this.subscriptions[1];

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.signUpForm.value);
  }
}
