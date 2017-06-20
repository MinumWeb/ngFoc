import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  items:Array<any> = [
    {
      name: 'foo',
      title: 'Cool Story Bro'
    },
    {
      name: 'Bobo',
      title: 'Cool Story Bro2'
    },
    {
      name: 'Jon',
      title: 'Cool Story Bro3'
    },
    {
      name: 'Lur',
      title: 'Cool Story Bro4'
    }
  ];

  getItems() {
    return this.items;
  }

  constructor() { }

}
