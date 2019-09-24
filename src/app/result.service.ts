import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Options } from 'selenium-webdriver/chrome';



class Customer {

  enrolment: number;
  branch: string;
  }

@Injectable({
  providedIn: 'root'
})
export class ResultService {



constructor(private http: HttpClient) {}

post(enrolment, branch){

  let params = new HttpParams()
    .set('enrolment', enrolment)
    .set('branch', branch);
  const obj = this.http.get('http://localhost:8080/getResult', {
    params
  });
  console.log("Is this printing ",obj);
  return obj;
}
}
