import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MovieListComponent, BookingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
