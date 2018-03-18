import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor() {}

  ngOnInit() {}

  submit(ngForm) {
    console.log(ngForm);
  }
}
