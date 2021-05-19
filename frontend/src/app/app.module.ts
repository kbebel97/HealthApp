import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './user/application/application.component';

import { ProfileComponent as EmployeeProfile} from './Employee/profile/profile.component';
import { ProfileComponent as AdminProfile} from './Admin/profile/profile.component';
import { ProfileComponent as UserProfile} from './User/profile/profile.component';

import { HomeComponent as EmployeeHome} from './Employee/home/home.component';
import { HomeComponent as AdminHome} from './Admin/home/home.component';
import { HomeComponent as UserHome} from './User/home/home.component';

import { AdminComponent } from './login/admin/admin.component';
import { EmployeeComponent } from './login/employee/employee.component';
import { UserComponent } from './login/user/user.component';

import { NavComponent as EmployeeNav } from './Employee/nav/nav.component';
import { NavComponent as AdminNav } from './Admin/nav/nav.component';
import { NavComponent as UserNav } from './User/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DependentsComponent } from './user/dependents/dependents.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    EmployeeHome,
    AdminHome,
    UserHome,
    EmployeeProfile,
    AdminProfile,
    UserProfile,
    AdminComponent,
    EmployeeComponent,
    UserComponent,
    EmployeeNav,
    AdminNav,
    UserNav,
    DependentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    MatSelectModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
