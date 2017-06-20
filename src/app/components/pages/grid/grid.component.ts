import { Component, OnInit, Inject } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
  // providers: [DataService]
})

export class GridComponent implements OnInit {

  // Way to inject dataservice
  // constructor(@Inject('users') private users) {}

  items:Array<any>;

  // Another way to provide data.service
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getItems();
  }


  // storys = [
  //   {
  //     name: 'foo',
  //     title: 'Cool Story Bro'
  //   },
  //   {
  //     name: 'Bobo',
  //     title: 'Cool Story Bro2'
  //   },
  //   {
  //     name: 'Jon',
  //     title: 'Cool Story Bro3'
  //   },
  //   {
  //     name: 'Lur',
  //     title: 'Cool Story Bro4'
  //   }
  // ]

}
