import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import {UserComponent} from './user/user.component';
import {TeamRegistrationComponent} from './team-registration/team-registration.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import {SIGComponent} from './sig/sig.component';
// import { FreshersComponent } from './freshers/freshers.component'


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
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  // {path: 'sigs', component: SIGComponent},
  // {path: 'freshers_column', component: FreshersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
