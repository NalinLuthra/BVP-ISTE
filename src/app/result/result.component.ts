import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { range } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  formData: { enrolment: '01651203116', branch: 'IT' };

  constructor(private rs: ResultService) { }
  enrolment:string;
  branch:string;


  innerHtml;
    temp:string = "(click here for all college ranks)";
    temp1:string = "(click here for all university ranks)";
    temp2 = ["DISCLAIMER","All Results have been compiled from Result files available at IPU website.",
    "Resuls are compiled automatically using scripts due to which some results may not have been compiled.",
    "Please confirm your results from ipu website or marksheets before using it for any purpose.",
    "Website Designed", "Maintained by Rajat Gupta(IT GTBIT 2013 Batch)",
    "REPORT ANY DISCREPANCIES IN THE RESULTS OR GIVE FEEDBACK/SUGGESTIONS",
    "guptarajat846@gmail.com","<li>","<li>","<li>","Home","College Ranks","University Ranks","Disclaimer","Contact"," AT ",
    "<br/><br />","<br/><br />","<br/><br />","<br/><br />","<br/><br />",
    '<a href="index.html"></a>',
    '<a href="getcolgrank.html"></a><br /><br />',
    '<a href="getunivrank.html"></a><br /><br />',
    '<a href="disclaimer.html"></a><br /><br />',
    '<a href="contact.html"></a><br /><br />',"</html>",
    '(Note - Aggregate only consists of semesters and subjects shown below)',"<li>","<li>","<li>"];

    get_value(){
      console.log("loading");
      this.rs.post(this.enrolment,this.branch).subscribe((data) => {
        this.innerHtml = data;
        console.log("Here is the data ",data);
      },
      error => {

        let tempo = (error.error.text).slice(5013, (error.error.text).length);
        for(let i in range(4)){
          tempo = tempo.replace(this.temp, '');
          tempo = tempo.replace(this.temp1, '');
        }
        for(let i in this.temp2){
          tempo = tempo.replace(this.temp2[i], '');
        }
        tempo = tempo.replace('<b>STREAM', '<b> &nbsp &nbsp &nbsp &nbsp STREAM');
        tempo = tempo.replace('<b>NAME', '<b> &nbsp &nbsp &nbsp &nbsp NAME')
        for(let i in range(4)){
          tempo = tempo.replace('<b>UNIVERSITY', '<b> &nbsp &nbsp &nbsp &nbsp UNIVERSITY')
          tempo = tempo.replace('<b>Backlog', '<b> &nbsp &nbsp &nbsp &nbsp Backlog')
          tempo = tempo.replace('<b>PERCENTAGE', '<b> &nbsp &nbsp &nbsp &nbsp PERCENTAGE')
        }


        console.log('this is ', tempo);
        this.innerHtml = tempo;
      });
    }

  ngOnInit() {



    // this.apiService.createPolicy(this.formData).subscribe((policy: any)=>{
    //   console.log("Policy created, ", policy);
    // });


  }

//   var request = require("request");

// var options = { method: 'POST',
//   url: 'http://ipuresults.co.in/getresult.php',
//   headers:
//    { 'cache-control': 'no-cache',
//      Connection: 'keep-alive',
//      'content-length': '282',
//      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
//      'accept-encoding': 'gzip, deflate',
//      Host: 'ipuresults.co.in',
//      'Postman-Token': '793e284d-a05c-4acb-a64c-87032457eefa,70bc8e4e-6cae-4110-9cb5-3e5c21142ccf',
//      'Cache-Control': 'no-cache',
//      Accept: '*/*',
//      'User-Agent': 'PostmanRuntime/7.15.0' },
//   formData: { enrolment: '01651203116', branch: 'IT' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

}
