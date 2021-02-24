import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetbookingService } from './getbooking.service';

// export interface Config {
//   heroesUrl: string;
//   textfile: string;
//   date: any;
// }


@Component({
  selector: 'app-getbooking',
  templateUrl: './getbooking.component.html',
  styleUrls: ['./getbooking.component.scss']
})
export class GetbookingComponent implements OnInit {
  errorMessage: boolean;
  now:Date;
  bookingDetails: any;
  bookingId = new FormControl('');

  constructor(private getbooking: GetbookingService ) { }

  ngOnInit(): void {
    this.errorMessage = false;
    this.now = new Date();
    console.log(this.now);
  }

  GetBookingId() {
    console.log(this.bookingId.value);
    this.errorMessage = true;
    // this.bookingId.setValue('Nancy');
    // config: Config;

// showConfig() {
  this.getbooking.getBooking(this.bookingId.value)
    // clone the data object, using its known Config shape
    .subscribe((response: any) => { 
      console.log(response);
      this.bookingDetails = response.data;
     });
// }
  }

}
