import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // Data need to be uploaded
  username: string;
  email: string;
  quote: string;
  position: string;
  phone: number;
  roll: number;
  dob: any;
  facebookId: string;
  instagramId: string;
  linkedinId: string;
  twitterLink: string;
  path: any;
  imager: any = 'https://picsum.photos/130/130?image=1027';

  constructor(private formBuilder: FormBuilder, private rs: RegisterService) { }

  onFileUpload(e){
    this.path = e.target.files[0];
    var reader = new FileReader();
    // this.imager = e.target.files;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (_event) => {
      this.imager = reader.result;
    }
  }

  register() {
      // tslint:disable-next-line: max-line-length
      this.rs.addTeam(this.username, this.email, this.quote , this.position, this.dob , this.phone, this.roll, this.facebookId, this.instagramId, this.linkedinId , this.twitterLink, this.path);

      // tslint:disable-next-line: max-line-length
      console.log(this.username, this.email,  this.quote , this.position, this.dob , this.phone, this.roll, this.facebookId, this.instagramId, this.linkedinId , this.twitterLink, this.path);

  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dob = event.value;
    console.log(this.dob);
    console.log(`${type}: ${event.value}`);
  }

}
