import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  courses: Array<any> = [];
  isActive: Boolean = true;

  constructor( public authorService: AuthorService) {
    this.courses = this.authorService.getAuthor();
    console.log(this.courses);
   }

  ngOnInit() {
  }
}
