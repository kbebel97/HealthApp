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

import { PlanComponent } from './user/plan/plan.component';
import { CreateProfileComponent } from './User/application/create-profile/create-profile.component';
import { AddDependentsComponent } from './User/application/add-dependents/add-dependents.component';
import { SelectPlanComponent } from './User/application/select-plan/select-plan.component';
import { CreateAccountComponent } from './User/application/create-account/create-account.component';


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
    {path: 'dependents', component: DependentsComponent, data: { animation: 2}},
    {path: 'profile', component: UserProfile , data: { animation: 'HomePage'}},
    {path: 'plan', component: PlanComponent , data: { animation: 'AboutPage'}}
  ]},
  {path: 'apply', component: ApplicationComponent, children: [
    {path: 'create_account', component: CreateAccountComponent},
    {path: 'create_profile', component: CreateProfileComponent},
    {path: 'add_dependents', component: AddDependentsComponent},
    {path: 'select_plan', component: SelectPlanComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
