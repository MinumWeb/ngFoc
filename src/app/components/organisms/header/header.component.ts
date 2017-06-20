import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public location = '' ;

  constructor(private router : Router) {
    this.location = router.url;
  }

  routeIsActive(routePath: string) {
      return this.router.url == routePath;
  }

  ngOnInit() {
  }

}
