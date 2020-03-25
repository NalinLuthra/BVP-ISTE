import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uri = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  addTeam(name, email, quote ,position, dob, phone, roll, facebook, instagram, linkedin, twitter, file){
    // console.log(file)
    const formData = new FormData();
    formData.append('memberImage', file);
    this.http.post<any>('http://localhost:8080/imageUpload', formData).subscribe(
      res => {
        const obj = {
          name: name,
          email: email,
          quote: quote,
          position: position,
          dob: dob,
          phone: phone,
          rollNumber: roll,
          facebookId: facebook,
          instagramId: instagram,
          linkedinId: linkedin,
          twitterId: twitter,
          memberImage: res.path
        };
        console.log(obj);
        this.http.post('http://localhost:8080/addTeam', obj).subscribe(res => console.log(res));
      },
      err => console.log(err)
    )
  }

  getTeam(){
    const obj = this.http.get('http://localhost:8080/getTeam');
    console.log(obj);
    return obj;
  }
}
