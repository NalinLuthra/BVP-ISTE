import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import {UserComponent} from './user/user.component';
import {TeamRegistrationComponent} from './team-registration/team-registration.component';
import {SIGComponent} from './sig/sig.component';
import { FreshersComponent } from './freshers/freshers.component';
import {ResultComponent} from './result/result.component';


const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  // ...any other options you'd like to use
};

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HompageComponent},
  {path: 'team2019', component: UserComponent},
  {path: 'teamRegistration', component: TeamRegistrationComponent},
  {path: 'sigs', component: SIGComponent},
  {path: 'freshers_column', component: FreshersComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
