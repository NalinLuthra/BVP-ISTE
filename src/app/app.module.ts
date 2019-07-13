import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// List of Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HompageComponent } from './hompage/hompage.component';
import {BottomSheetOverviewExampleSheet} from './BottomSheet/bottom-sheet-overview-example-sheet'
//Forms
import {FormsModule} from '@angular/forms';

//Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Angular Material
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    HompageComponent,
    BottomSheetOverviewExampleSheet
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatListModule, MatBottomSheetModule, 
  ],
  exports : [  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheet]
})

export class AppModule { 

}