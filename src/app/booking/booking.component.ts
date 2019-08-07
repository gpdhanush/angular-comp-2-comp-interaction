import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  movie = [{
      id: 1,
      name: 'Muni',
      price: 120,
      src: 'https://i.ytimg.com/vi/8RdgCVKvC8E/maxresdefault.jpg',
    },
    {
      id: 2,
      name: 'Kanchana (Muni 2)',
      price: 160,
      src: 'https://i.ytimg.com/vi/AKz8TUrUZN8/maxresdefault.jpg',

    },
    {
      id: 3,
      name: 'Kanchana 2',
      price: 180,
      src: 'https://i.ytimg.com/vi/cTDtgn-ABNM/maxresdefault.jpg'

    }
    ];
    output: any;
    result: string;
  constructor() { }

  ngOnInit() {
  }
  onclick(id) {
    console.log(id);
    this.result = id;
    // alert(id);
  }

}