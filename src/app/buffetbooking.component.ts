import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BuffetBooking } from './buffetbooking';
import { BuffetbookingService } from './buffetbooking.service';

@Component({
  selector: 'app-buffetbooking',
  templateUrl: './buffetbooking.component.html',
  styleUrls: ['./buffetbooking.component.scss']
})
export class BuffetbookingComponent implements OnInit {

  submitted: boolean = false;
  errorMessage: string;
  successMessage: string;
  // formId: string = '';
  buffetBookingForm: FormGroup;

  constructor(private fb: FormBuilder, private buffetService: BuffetbookingService) { }

  ngOnInit(): void {
    // this.submitted = true;
    this.successMessage = '';

    this.buffetBookingForm = this.fb.group({
      buffetName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      plateCount: ['', [Validators.required, Validators.maxLength(2)]],
      bookedOn: ['', Validators.required]
    })
  }
  get formControls() { return this.buffetBookingForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.buffetBookingForm.value);
    console.log(this.buffetBookingForm);
      this.buffetService.bookBuffet(this.buffetBookingForm.value).subscribe(
          (response: any) => {
              // if (response && response !== '') {
              //     if (response.statuscode === 200) {
              //         const status = response.data;
              //     } else {
              //         console.log('Error in logging messages: ', response.Message === '' ? 'Message node is empty' : response.Message);
              //     }
              // }
              console.log(response);
              this.successMessage = response.id;
          }
      );
  }

}
