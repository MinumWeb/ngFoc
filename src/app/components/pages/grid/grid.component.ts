import { Component, OnInit, Inject } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [DataService]
})

export class GridComponent implements OnInit {

  // Way to inject dataservice
  // constructor(@Inject('users') private users) {}

  items:Array<any>;
  private errorMessage:any;

  // Another way to provide data.service
  constructor (private dataService: DataService) {
    this.getItems();
  }

  getItems ():void {

    /**
     * When you have a real services from an API
     * You need a subscriber to listen on changes.
     */

    // this.dataService
    //   .getItems()
    //   .subscribe(
    //     items => {
    //       this.items = items;
    //       console.log(this.items);
    //     },
    //     error => {
    //       this.errorMessage = <any>error;
    //     }

    //   );

    this.items = this.dataService.getItems();
  }

  ngOnInit () {
    // this.items = this.dataService.getItems();
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
