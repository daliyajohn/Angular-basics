import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthor() {
    return [
      {
        id : 1,
        name : 'daliya',
        address: 'pk nagar'
      },
      {
        id : 2,
        name : 'seeniya',
        address: 'pk nagar ikl'
      },
      {
        id : 3,
        name : 'viji',
        address: 'pk nagar hjy'
      },
    ];
  }
}
