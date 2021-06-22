import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dependent } from 'src/models/dependent.model';


@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class DependentsComponent implements OnInit, AfterViewChecked {

  constructor(private renderer : Renderer2) { }

  @ViewChild('divRelationship') divRelationship: ElementRef;
  @ViewChild('divRelationshipList') divRelationshipList: ElementRef;

  updateDependent : dependent;
  addDependent : boolean;

  error : boolean = false;
  dateValidation : boolean = true;
  displayRelationships : boolean = false;
  relationships = [
    "Spouse",
    "Daughter",
    "Son"
  ]
  relationship : string;

  dependents : Array<dependent> = [
    {  Id : 0,
      firstName : "Kacper",
      lastName: "Bebel",
      email: "kacperbebel97@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication : 1

    },
    {  Id : 1,
      firstName : "Julia",
      lastName: "Bebel",
      email: "Juliabebel6@gmail.comJuliabebel6@gmail.comJuliabebel6@gmail.com",
      dob : "10/05/1992",
      relationship : "Daughter",
      phoneNumber : 3472136196,
      authentication: 1
    },
    {  Id : 2,
      firstName : "Slava",
      lastName: "Mushyakov jrrr",
      email: "Slava@gmail.com",
      dob : "12/28/1988",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 2

    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication : 3
    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 2

    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 3

    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 1

    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 2
    },
    {  Id : 3,
      firstName : "Billy",
      lastName: "Bob",
      email: "BillyBob@gmail.com",
      dob : "12/28/1997",
      relationship : "Son",
      phoneNumber : 3472136196,
      authentication: 3
    }
  ]

  addDependentClickedMobile : boolean = false;
  updateDependentClickedMobile : boolean = false;

  addDependentClickedDesktop : boolean = false;

  updateDependentRef = new FormGroup({
    email : new FormControl(null, {validators: [Validators.required]}),
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]})
  })

  cancelAddDependent(){
    this.addDependent = false;
    this.relationship = "Relationship";
    window.scrollTo(0,0);
  }

  cancelUpdateDependent(){
    this.updateDependent = null;
    this.relationship = "Relationship";
    this.updateDependentRef.reset();
  }

  updateDependentFunc(){
    if(this.updateDependentRef.invalid){
      this.error = true;
      this.delay(3000).then(any=>{
        this.error = false;
      })
    } else {
      this.dependents[this.dependents.indexOf(this.updateDependent)].email = this.updateDependentRef.value.email;
      this.dependents[this.dependents.indexOf(this.updateDependent)].firstName = this.updateDependentRef.value.firstName;
      this.dependents[this.dependents.indexOf(this.updateDependent)].lastName = this.updateDependentRef.value.lastName;
      this.dependents[this.dependents.indexOf(this.updateDependent)].phoneNumber = this.updateDependentRef.value.phoneNumber;
      this.updateDependent = null;
      this.updateDependentRef.reset();
    }
  }


  // addDependentFunc(){
  //   this.addDependentRef.controls['relationship'].setValue(this.relationship);
  //   if(this.addDependentRef.invalid){
  //     this.error = true;
  //     this.delay(3000).then(any=>{
  //       this.error = false;
  //     })
  //   } else {
  //     let newDependent : dependent =
  //     {
  //       ID : null,
  //       firstName : this.addDependentRef.value.firstName,
  //       lastName: this.addDependentRef.value.lastName,
  //       email: this.addDependentRef.value.email,
  //       dob : this.addDependentRef.value.dob,
  //       relationship : this.addDependentRef.value.relationship,
  //       phoneNumber : this.addDependentRef.value.phoneNumber,
  //       authentication : 2
  //     }
  //     this.dependents.push(newDependent);
  //     this.addDependent = false;
  //   }
  // }

  updateDependentMenu(dependent: dependent){
    // window.scrollTo(0,0);
    this.updateDependent = dependent;
    this.updateDependentRef.controls['email'].setValue(this.updateDependent.email);
    this.updateDependentRef.controls['firstName'].setValue(this.updateDependent.firstName);
    this.updateDependentRef.controls['lastName'].setValue(this.updateDependent.lastName);
    this.updateDependentRef.controls['phoneNumber'].setValue(this.updateDependent.phoneNumber);
  }

  addDependentMenu(){
    this.addDependent = true;
  }

  ngOnInit(): void {
    this.addDependent = false;
    this.relationship = "Relationship";
  }

  onClick(event : Event) {
    this.displayRelationships = false;


    let classList = (event.target as Element).classList
    for(let i = 0; i < classList.length; i++){
      if(classList[i] == "relationship"){
        if(this.displayRelationships == false){
          this.displayRelationships = true;
        }
        else this.displayRelationships = false;
      }
    }
   }

   clearForm(){
     this.relationship = "Relationship";
   }

   ngAfterViewChecked() {
     if(this.divRelationship){
      let displayRelationshipWidth = this.divRelationship.nativeElement.offsetWidth;
      if(this.divRelationshipList)
        this.renderer.setStyle(this.divRelationshipList.nativeElement, 'width', displayRelationshipWidth + 'px');
     }
  }

   relationshipSelect(relationship){
    this.relationship = relationship;
   }

   validateDate(e){
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    if(e.target.value== null || e.target.value== ""){
      this.dateValidation = true;
    } else {
      if(!date_regex.test(e.target.value)){
        this.dateValidation = false;
      } else this.dateValidation = true
    }
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
