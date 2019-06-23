import { Component, OnInit } from '@angular/core';
import { User_profile } from '../users_profile';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  users: User_profile[] = [{ name : "Nalin Luthra", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            {name : "Sonam", email: "sarthak.luthra@gmail.com" ,quote : "I am Sarthak Luthra"},
                            { name : "Shriya", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Aakansha", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Kashish", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Rishab", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Bhavya", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Shruti", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Karthik", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Mahima", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Anubhav", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Punnya", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Tushar", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Drishti", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Srishti", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Parth Arora", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Kartik Gupta", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Manini", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Eeshita", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Vinyak", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Hardik Khurana", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},
                            { name : "Rishab Sharma", email: "nalin.luthra@gmail.com" ,quote : "I am Nalin Luthra"},];


  constructor() { }

  ngOnInit() {
  }

}
