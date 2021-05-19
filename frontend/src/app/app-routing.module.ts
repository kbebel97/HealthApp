import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './login/admin/admin.component';
import { EmployeeComponent } from './login/employee/employee.component';
import { UserComponent } from './login/user/user.component';

import { NavComponent as EmployeeNav } from './Employee/nav/nav.component';
import { NavComponent as AdminNav } from './Admin/nav/nav.component';
import { NavComponent as UserNav } from './User/nav/nav.component';

import { HomeComponent as EmployeeHome} from './Employee/home/home.component';
import { HomeComponent as AdminHome} from './Admin/home/home.component';
import { HomeComponent as UserHome} from './User/home/home.component';

import { ProfileComponent as EmployeeProfile} from './Employee/profile/profile.component';
import { ProfileComponent as AdminProfile} from './Admin/profile/profile.component';
import { ProfileComponent as UserProfile} from './User/profile/profile.component';

import { ApplicationComponent } from './user/application/application.component';
import { DependentsComponent } from './user/dependents/dependents.component';


const routes: Routes = [
  {path: '', redirectTo: '/user_login', pathMatch: 'full'},
  {path: 'user_login', component: UserComponent},
  {path: 'admin_login', component: AdminComponent},
  {path: 'employee_login', component: EmployeeComponent},
  {path: 'employee_nav', component: EmployeeNav, children: [
    {path: 'home', component: EmployeeHome},
    {path: 'profile', component: EmployeeProfile}
  ]},
  {path: 'admin_nav', component: AdminNav, children: [
    {path: 'home', component: AdminHome},
    {path: 'profile', component: AdminProfile}
  ]},
  {path: 'user_nav', component: UserNav, children: [
    {path: 'dependents', component: DependentsComponent},
    {path: 'profile', component: UserProfile}
  ]},
  {path: 'apply', component: ApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
