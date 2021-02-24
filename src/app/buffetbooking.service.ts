import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuffetBooking } from './buffetbooking';
import { Observable } from  'rxjs';

export  class  Policy {
  id: number;
  number:  number;
  amount:  number;
}

@Injectable({
  providedIn: 'root'
})
export class BuffetbookingService {

  constructor(private http: HttpClient) { }

  bookBuffet(data) {
      let testdata = {
        "name": "morpheus",
        "job": "leader"
      } 
      return this.http.post<Policy>('https://reqres.in/api/users', testdata);
  }

  // public getHttp(url, paramData): Observable<any[]> {
  //   // let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //   // let options       = new RequestOptions({ headers: headers }); // Create a request option

  //   return this.http.post(url, paramData)
  //     .map(data => data)
  //     .catch(this.handleError);
  // }
}
