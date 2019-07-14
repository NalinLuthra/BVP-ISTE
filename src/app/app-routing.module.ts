import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import {UserComponent} from './user/user.component';
import {TeamRegistrationComponent} from './team-registration/team-registration.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HompageComponent},
  {path: 'team2019', component: UserComponent},
  {path: 'teamRegistration', component: TeamRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
