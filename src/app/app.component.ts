import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
  }

  myFunction() {
    for (let i = 0; i < 4; i++) {
      let daliya = 1;
      console.log(i); // actual result
    }
    console.log('value of daliya', daliya);
    console.log('hh', i); // actual result

    for (var j = 0; j < 4; j++) {
      var daliya = 'john';
      console.log(j); // actual result
    }
    console.log(daliya);
  }
}
