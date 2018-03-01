import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  courses: Array<any> = [];
  isActive: Boolean = true;
  name: String;
  @Output() nameList = new EventEmitter();

  constructor( public authorService: AuthorService) {
    this.courses = this.authorService.getAuthor();
    this.name = 'daliya john, kollam';
    console.log(this.nameList);
    this.nameList.emit( this.name);
   }

  ngOnInit() {
  }
  onSubmit() {
    alert('das');
  }
}
