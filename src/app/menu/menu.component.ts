import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {BottomSheetOverviewExampleSheet} from './../BottomSheet/bottom-sheet-overview-example-sheet'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  ngOnInit() {
  }

}

