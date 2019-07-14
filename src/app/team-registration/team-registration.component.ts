import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';

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



  constructor(private formBuilder: FormBuilder, private rs: RegisterService) { }

  register() {
      // tslint:disable-next-line: max-line-length
      this.rs.addTeam(this.username, this.email, this.quote ,this.position, this.dob , this.phone, this.roll,this.facebookId, this.instagramId, this.linkedinId , this.twitterLink);

      // tslint:disable-next-line: max-line-length
      console.log(this.username, this.email, this.position, this.dob , this.phone, this.roll, this.facebookId, this.instagramId, this.linkedinId , this.twitterLink);

  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
