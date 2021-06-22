import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-dependents',
  templateUrl: './add-dependents.component.html',
  styleUrls: ['./add-dependents.component.css']
})
export class AddDependentsComponent implements OnInit {

  error_text : string = null;
  message_text: string  = null;
  dateValidation : boolean = true;
  relationship : string;

  displayRelationships : boolean = false;

  addFamilyRef = new FormGroup({
    email : new FormControl(null, {validators: [Validators.required]}),
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    dob : new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]}),
    // relationship : new FormControl(null, {validators: [Validators.required]})
  })

  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.relationship = "Relationship"
  }

  pushtoAddMembersList(){

  }

  validateDate(e){
    console.log(e.target.value);
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    console.log(date_regex.test(e.target.value));
    if(e.target.value== null || e.target.value== ""){
      this.dateValidation = true;
    } else {
      if(!date_regex.test(e.target.value)){
        this.dateValidation = false;
      } else this.dateValidation = true
    }
  }

  returntoSelectPlan(){
    this.router.navigate(['../select_plan'],  {relativeTo: this.route});

  }

}
