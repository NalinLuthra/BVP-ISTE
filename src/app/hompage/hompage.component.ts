import {
  Component,
  OnInit
} from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ["https://i.ibb.co/dQLHVGG/team.jpg"];

  a = ["https://i.ibb.co/TcdxrmZ/27336433-1214828261984286-3854284777618100139-n.jpg" ,
    "https://i.ibb.co/HFDsrxW/bvest.jpg" ,
    "https://i.ibb.co/Rzy6x0f/bvest-bottoms-up.jpg" ,
    "https://i.ibb.co/KyFhjXc/c.jpg" ,
    "https://i.ibb.co/CHgtJ2F/capture-the-flag.jpg" ,
    "https://i.ibb.co/qp7SQHn/cetpa.jpg" ,
    "https://i.ibb.co/Zhs8Frp/codestorm.jpg" ,
    "https://i.ibb.co/Sw5sHLY/codetrek.jpg" ,
    "https://i.ibb.co/v3wTh23/ethical-hacking.jpg" ,
    "https://i.ibb.co/BcrSbKv/ethical-hacking-2-0.jpg" ,
    "https://i.ibb.co/RB2GRpD/ethical-hacking-3.jpg" ,
    "https://i.ibb.co/ZzFQ2nZ/evolusione.jpg" ,
    "https://i.ibb.co/8gmWD0M/evolusione-bootcamp.jpg" ,
    "https://i.ibb.co/PN844Gg/guess-it.jpg" ,
    "https://i.ibb.co/CWN2cFR/hacktillend-bvest.jpg" ,
    "https://i.ibb.co/B3dP3Qb/hbnic.jpg" ,
    "https://i.ibb.co/2WwddZX/intrapersonal.jpg" ,
    "https://i.ibb.co/b1qrKHg/intro-to-ml.jpg" ,
    "https://i.ibb.co/CJxpF28/laser-room-bvest.jpg" ,
    "https://i.ibb.co/Wg5LJtM/let-us-C.jpg" ,
    "https://i.ibb.co/n02cTHb/lfr.jpg" ,
    "https://i.ibb.co/28H4bGc/orientation.jpg" ,
    "https://i.ibb.co/vLgzQnS/personality-devp.jpg" ,
    "https://i.ibb.co/hm8hWj4/photo-booth.jpg" ,
    "https://i.ibb.co/n7NW85q/pixxels.jpg" ,
    "https://i.ibb.co/CbHDLQ9/project-discussion.jpg" ,
    "https://i.ibb.co/FzV8YFW/pubg.jpg" ,
    "https://i.ibb.co/Q8qcDfV/robartics.jpg" ,
    "https://i.ibb.co/BsfHsBH/robotics.jpg" ,
    "https://i.ibb.co/XWBMxrw/treasure-hunt.jpg" ,
    "https://i.ibb.co/qm6vhr1/web-mondays.jpg" ,
    "https://i.ibb.co/qrVBv15/what-the-fake-talks.jpg" ,
    "https://i.ibb.co/Yc7P3Xf/writing-a-career.jpg"
  ];

  imageObject: Array< object > = [];


  // imageObject: Array < object > = [{
  //   image: 'assets/img/sahitya.jpg',
  //   thumbImage: 'assets/img/sahitya.jpg',
  //   alt: 'alt of image',
  //   title: 'title of image'
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: this.a[0], // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }, {
  //   image: 'assets/img/sahitya.jpg', // Support base64 image
  //   thumbImage: 'assets/img/sahitya.jpg', // Support base64 image
  //   title: 'Image title', //Optional: You can use this key if want to show image with title
  //   alt: 'Image alt' //Optional: You can use this key if want to show image with alt
  // }];

  constructor() {}

  ngOnInit() {
    this.a.forEach(async element => {
      let obj = {
        image: element,
        thumbImage: element,
        alt: '',
        title: ''
      }
      await this.imageObject.push(obj);
    });
  }

}
