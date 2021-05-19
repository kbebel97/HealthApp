import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  loginRef = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {
  }

  login(){

  }

}
