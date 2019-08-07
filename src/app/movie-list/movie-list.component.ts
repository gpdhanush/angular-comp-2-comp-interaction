import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() bookingMovie;
  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  
  }
  book(name) {
    this.output.emit("The " + name + " was Booked Successful." );
  }
}