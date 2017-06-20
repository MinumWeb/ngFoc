import { Component, OnInit, Inject } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

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

  // Another way to provide data.service
  // constructor(private data: DataService){}

  // Way to inject dataservice
  // constructor(@Inject('user') private user) {}

}
