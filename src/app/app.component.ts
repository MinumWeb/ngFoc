import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app works!';

  // constructor(private router: Router) {
  //   setTimeout((router: Router) => {
  //       // this.router.navigate(['nextRoute']);
  //        this.router.navigate(['/grid']);
  //   }, 5000);  //5s
  // }
  constructor(private data: DataService){}
  // constructor(@Inject('user') private user) {}
}
