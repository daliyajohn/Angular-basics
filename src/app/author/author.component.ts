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

  constructor(public authorService: AuthorService) {
    this.courses = this.authorService.getAuthor();
    this.name = 'daliya john, kollam';
  }

  ngOnInit() {}
  onSubmit() {
    alert('das');
  }
}
