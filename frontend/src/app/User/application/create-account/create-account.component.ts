import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  accountRef = new FormGroup({
    Email : new FormControl(null, {validators: [Validators.required]}),
    Password : new FormControl(null, {validators: [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]}),
    ConfirmPassword : new FormControl(null, {validators: [Validators.required]})
  })

  error_text : string = null;
  error: boolean = false;

  ngOnInit(): void {
  }

  createAccount(){
    if(this.accountRef.invalid){
      this.error_text = "All fields must be filled!"
      this.error = true;
    } else {
        // send to backend
        this.router.navigate(['../create_profile'],  {relativeTo: this.route});

    }
  }

  clearForm(){

  }

}
