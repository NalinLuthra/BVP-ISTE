import { Component, OnInit } from '@angular/core';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';


@Component({
    selector: 'bottom-sheet-overview-example-sheet',
    templateUrl: 'bottom-sheet-overview-example-sheet.html',
  })
  export class BottomSheetOverviewExampleSheet {
    constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}
  
    openLink(event: MouseEvent): void {
      this.bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }