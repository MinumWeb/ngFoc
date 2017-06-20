import { NgModule } from '@angular/core';
import { RouterModule, Routes, Params } from '@angular/router';

import { AboutComponent } from './components/pages/about/about.component';
import { GridComponent } from './components/pages/grid/grid.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'post-graduate-studies',
    component: AboutComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class AppRouting {}

export const ComponentRoutes = [AboutComponent, GridComponent];
