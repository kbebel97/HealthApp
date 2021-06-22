import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  loginRef = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  ngOnInit(): void {


  }

  login(){
    //validate user
    this.router.navigate(['/user_nav/profile']);

  }

  signup(){
    this.router.navigate(['/apply'])
  }

}
