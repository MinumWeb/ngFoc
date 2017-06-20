import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRouting, ComponentRoutes } from './app.routes';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GridItemComponent } from './components/organisms/grid-item/grid-item.component';
import { GridComponent } from './components/pages/grid/grid.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AboutComponent,
    HeaderComponent,
    WelcomeComponent,
    GridItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
