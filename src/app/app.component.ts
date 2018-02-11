import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    for (let i = 0; i < 4; i++) {
      console.log(i); // actual result
    }
    console.log('hai', i); // let scope inside block  of function
  }
}
