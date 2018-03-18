import { Component, Output, EventEmitter, Input } from '@angular/core';

interface Address {
  address1: 7;
  address2: 9;
  // tslint:disable-next-line:semicolon
}
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
  public myData: Array<string> = ['daliya', 'seeniya', 'viji'];
  public myData1: Array<string> = ['daliya1', 'seeniya2', 'viji3'];
  public countData: Number = 12;

  title = 'app';

  constructor() {
    enum color {
      daliya,
      seeniya,
      viji
    } //  constant value , default value should be 0, 1 , 2 etc
    console.log(color.daliya);

    // arrow function
    let data = this.myData.map(value => value.length + 1); // arrow function
    console.log(data);

    let list = this.myData1.map(values => {
      return values;
    });
    console.log(list);

    let das = Object.create({
      name: 'daliya',
      age: 4
    });
    console.log(das);
  }

  myFunction() {
    const age = 6;
    for (let i = 0; i < 4; i++) {
      const daliya = 1;
      console.log(i); // actual result
    }
    console.log('value of daliya', daliya);

    for (let j = 0; j < 4; j++) {
      let daliya = 'john';
      console.log(j); // actual result
    }
    console.log(daliya);
  }

  getData(value) {
    console.log('value', value);
  }
}
