import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {ActivatedRoute} from '@angular/router';
import { HostListener} from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';
import { delay } from 'q';



interface FoodNode {
  name: string;
  disc: string;
  // link: string;
  // link_text: string;
  // link_c: boolean;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Notes', disc:"<b>Test it here </b> is it working",
    children: [
      // {name: 'Notes Hub', disc:"Test it here is it working", link_c:true ,link:'here', link_text:'Click here to open website'},
      {name: 'Written Notes', disc:"<b>Test it here </b> is it working 2"},
    ]
  }
  ];
  // }, {
  //   name: 'Files/Practicals',
  //   children: [
  //     { name: 'Files' },
  //     { name: 'Practical'},
  //   ]
  // }, {
  //   name: 'Exam Preprations',
  //   children:[
  //     {name: 'Last minute preprations'},
  //     {name: 'Exam Videos'}
  //   ]
  // }, {
  //   name: 'Marks',
  //   children:[
  //     {name: 'How to score marks ?'},
  //     {name: 'Importance of marks'},
  //     {name: 'How much marks are sufficient ?'}
  //   ]
  // }, {
  //   name: 'Sports',
  //   children:[
  //     {name: 'When you are allowed to play ?'},
  //     {name: 'How to get sports equipments ?'},
  //     {name: 'Hacks to play'}
  //   ]
  // }, {
  //   name: 'Hack-enjoy',
  //   children:[
  //     {name: 'Extra time with friends'},
  //   ]
  // }
// ];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-freshers',
  templateUrl: './freshers.component.html',
  styleUrls: ['./freshers.component.css']
})




export class FreshersComponent implements OnInit {

  disc_temp = "Here here";
temp:string;
  async goto(node){
    let lister;
    let flag = true;
    // TREE_DATA.forEach(element => {
    //   element.children.forEach(e => {
    //     console.log(e.name);
    //     lister = node.innerHTML.includes(e.name);
    //     if(lister){
    //       console.log(lister);
    //       console.log(e);
    //       this.disc_temp = e.disc;
    //       flag = false;
    //       return;
    //     }
    //   });
    //   if(!flag){
    //     // console.log("Exit external loop")
    //     return;
    //   }
    // });
    // console.log(node.innerHTML);
    this.temp = '/freshers_column';
    await this.router.navigateByUrl(this.temp);


    this.temp = '/freshers_column#info_1';
    await this.router.navigateByUrl(this.temp);

  }

  private fragment: string;

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private route: ActivatedRoute, public router: Router) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => {
    return node.expandable;
  };

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

}
