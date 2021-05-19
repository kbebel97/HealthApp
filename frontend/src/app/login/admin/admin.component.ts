import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
