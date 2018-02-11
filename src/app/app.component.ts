import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name; // type must be any
  public name1: number; // type must be number
  public name3: any = [1, 2, 3]; // must be array
  public nameList: Array<string> = []; // array contain string value
  public nameList2: Array<number> = []; // array contain number value

  title = 'app';
  constructor() {
    enum color {daliya, seeniya, viji} //  constant value , default value should be 0, 1 , 2 etc
    console.log(color.daliya);
  }

  myFunction() {
    const age = 6;
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
