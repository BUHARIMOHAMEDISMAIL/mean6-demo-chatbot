import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class GetbookingService {

  constructor(private http: HttpClient) { }

  getBooking(id){
    console.log(id);
    // return this.http.get('https://reqres.in/api/users?page=2')
    //   .map((resp) => (resp.json()));
      return this.http.get('https://reqres.in/api/users?page=2');
  }
}
