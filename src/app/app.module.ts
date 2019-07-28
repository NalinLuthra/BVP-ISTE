import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// List of Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HompageComponent } from './hompage/hompage.component';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';


import {BottomSheetOverviewExampleSheet} from './BottomSheet/bottom-sheet-overview-example-sheet';
//Forms
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Angular Material
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';


// Awesome Fonts
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Virtual Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    HompageComponent,
    BottomSheetOverviewExampleSheet,
    TeamRegistrationComponent,

  ],

  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ScrollingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatStepperModule,
    HttpClientModule,
    MatGridListModule,
    AngularFontAwesomeModule
  ],
  exports : [
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BottomSheetOverviewExampleSheet]
})

export class AppModule {

}
