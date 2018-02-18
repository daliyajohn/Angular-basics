import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthor() {
    return [
      {
        id : 1,
        name : 'daliya'
      },
      {
        id : 2,
        name : 'seeniya'
      },
      {
        id : 3,
        name : 'viji'
      },
    ];
  }
}
