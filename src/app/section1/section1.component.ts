import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  public isSelected: Boolean = false;
  public like: any = 0;

  constructor() {}

  ngOnInit() {}

  thumpChange() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.like++;
    } else {
      this.like--;
    }
  }
}
