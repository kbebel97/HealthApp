import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { account } from 'src/models/account.model';
import { dependent } from 'src/models/dependent.model';
import { plan } from 'src/models/plan.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})



export class PlanComponent implements OnInit, AfterViewChecked {

  relationship : string;
  error : boolean;
  dateValidation : boolean = true;
  error_text: string;
  message_text: string;
  removeFamilyDropdownHeight: string;
  membertoEdit: dependent;

  constructor(private renderer : Renderer2) { }

  Tiers = [1, 2, 3]

  relationships = [
    "Spouse",
    "Daughter",
    "Son"
  ]

  removeMembersArray : dependent[] = []
  addMembersArray : dependent[] = []

  @ViewChild('divRelationship') divRelationship: ElementRef;
  @ViewChild('divRelationshipList') divRelationshipList: ElementRef;

  //Desktop
  @ViewChild('medical') medical: ElementRef;
  @ViewChild('medicalTiers') medicalTiers: ElementRef;

  @ViewChild('dental') dental: ElementRef;
  @ViewChild('dentalTiers') dentalTiers : ElementRef;

  @ViewChild('vision') vision : ElementRef;
  @ViewChild('visionTiers') visionTiers : ElementRef;

  //Mobile
  @ViewChild('medicalMobile') medicalMobile: ElementRef;
  @ViewChild('medicalTiersMobile') medicalTiersMobile: ElementRef;

  @ViewChild('dentalMobile') dentalMobile: ElementRef;
  @ViewChild('dentalTiersMobile') dentalTiersMobile : ElementRef;

  @ViewChild('visionMobile') visionMobile : ElementRef;
  @ViewChild('visionTiersMobile') visionTiersMobile : ElementRef;

  @ViewChild('removeMember') removeMember : ElementRef;
  @ViewChild('removeMemberList') removeMemberList : ElementRef;

  @ViewChild('removeFamilyDropdown') removeFamilyDropdown: ElementRef;


  ngOnInit(): void {
    this.error = false;
    this.relationship = "Relationship";
    this.planChangeMenu = false;
    this.addFamilyMenu = false;
    this.removeFamilyMenu = false;

    this.account = {
      Id : 0,
      plan : {
        Id : 0,
        isDental: false,
        isVision: true,
        isMedical: true,
        dentalTier : 1,
        visionTier : 2,
        medicalTier : 1,
        dependents : [
          {Id : 0,
          firstName : "Anna",
          lastName: "Bebel",
          email: "annabebel4@msn.com",
          dob : "03/07/1971",
          relationship : "Mother",
          phoneNumber : 9178629690,
          authentication : 1
          },
          {Id : 1,
            firstName : "Julia",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Sister",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Slava",
            lastName: "MushyakovMushyakovMushyakovMushyakov",
            email: "slava@gmail.com",
            dob : "10/05/2019",
            relationship : "Brother",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Leszek",
            lastName: "Bebel",
            email: "Leszek@gmail.com",
            dob : "10/05/2019",
            relationship : "Dad",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          },
          {Id : 1,
            firstName : "Ruthie",
            lastName: "Bebel",
            email: "juliabebel6@gmail.com",
            dob : "10/05/2019",
            relationship : "Cat",
            phoneNumber : 3476108771,
            authentication : 1
          }
        ],
        monthlyPremium : 150.00,
        medicalCopay: 25.00,
        visionCopay: 25.00,
        dentalCopay: 25.00
      },
      profile: {
        Id: 0,
        firstName: "Kacper",
        lastName: "Bebel",
        DoB: "12/28/1997",
        Occupation: "Software Engineer",
        maritalStatus: "Single",
        phoneNumber: 3472136196,
        address: {
          country: "United States of America (the)",
          street: "6 Sturdevant Dr",
          apt: null,
          zipcode: "06811",
          city: "Danbury",
          State: "Connecticut"
        }
      }
    }

    this.accountCopy = JSON.parse(JSON.stringify(this.account));
  }

  editMemberForm: boolean = false;
  addFamilyMenu : boolean;
  removeFamilyMenu : boolean;
  planChangeMenu : boolean;
  account : account;
  accountCopy: account;


  displayRelationships : boolean = false;
  displayMedicalTiers : boolean = false;
  displayVisionTiers : boolean = false;
  displayDentalTiers : boolean = false;
  displayRemoveMemberList : boolean = false;

  addFamilyRef = new FormGroup({
    email : new FormControl(null, {validators: [Validators.required]}),
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    dob : new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]}),
    // relationship : new FormControl(null, {validators: [Validators.required]})
  })


  editFamilyRef = new FormGroup({
    email : new FormControl(null, {validators: [Validators.required]}),
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    dob : new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]}),
    // relationship : new FormControl(null, {validators: [Validators.required]})
  })

  ngAfterViewChecked() {
    if(this.divRelationship){
     let displayRelationshipWidth = this.divRelationship.nativeElement.offsetWidth;
     if(this.divRelationshipList)
       this.renderer.setStyle(this.divRelationshipList.nativeElement, 'width', displayRelationshipWidth + 'px');
      }
    if(this.removeMember){
      let displayremoveMemberWidth = this.removeMember.nativeElement.offsetWidth;
      if(this.removeMemberList)
        this.renderer.setStyle(this.removeMemberList.nativeElement, 'width', displayremoveMemberWidth + 'px');
      }
    if(this.removeFamilyDropdown && this.removeMember){
      if(this.removeMemberList){
        console.log(this.removeFamilyDropdown.nativeElement.offsetHeight - 80);
        if (this.removeFamilyDropdown.nativeElement.offsetHeight - 80 < 0){
          this.renderer.setStyle(this.removeMemberList.nativeElement, 'height', 80 + 'px')
          this.renderer.setStyle(this.removeMemberList.nativeElement, 'width', this.removeMember.nativeElement.offsetWidth + 'px');
        } else {
          this.renderer.setStyle(this.removeMemberList.nativeElement, 'height', (this.removeFamilyDropdown.nativeElement.offsetHeight) + 'px')
          this.renderer.setStyle(this.removeMemberList.nativeElement, 'width', this.removeMember.nativeElement.offsetWidth + 'px');
          }
        }
      }
    if(window.innerWidth < 1050){
      console.log("mobile")
      if(this.medicalMobile){
        let displayMedicalWidth = this.medicalMobile.nativeElement.offsetWidth;
        if(this.medicalTiersMobile)
          this.renderer.setStyle(this.medicalTiersMobile.nativeElement, 'width', displayMedicalWidth + 'px');
        }
      if(this.dentalMobile){
        let displayDentalWidth = this.dentalMobile.nativeElement.offsetWidth;
        if(this.dentalTiersMobile)
          this.renderer.setStyle(this.dentalTiersMobile.nativeElement, 'width', displayDentalWidth + 'px');
        }
      if(this.visionMobile){
        let displayVisionWidth = this.visionMobile.nativeElement.offsetWidth;
        if(this.visionTiersMobile)
          this.renderer.setStyle(this.visionTiersMobile.nativeElement, 'width', displayVisionWidth + 'px');
        }
    } else{
      console.log('desktop')
        if(this.medical){
          let displayMedicalWidth = this.medical.nativeElement.offsetWidth;
          if(this.medicalTiers)
            this.renderer.setStyle(this.medicalTiers.nativeElement, 'width', displayMedicalWidth + 'px');
          }
        if(this.dental){
          let displayDentalWidth = this.dental.nativeElement.offsetWidth;
          if(this.dentalTiers)
            this.renderer.setStyle(this.dentalTiers.nativeElement, 'width', displayDentalWidth + 'px');
          }
        if(this.vision){
          let displayVisionWidth = this.vision.nativeElement.offsetWidth;
          if(this.visionTiers)
            this.renderer.setStyle(this.visionTiers.nativeElement, 'width', displayVisionWidth + 'px');
          }
    }
  }

  toggleAddFamilyMenu(){
    window.scrollTo(0,0);
    if(this.addFamilyMenu == true){
      this.addFamilyMenu = false;
      this.error_text = null;
      this.message_text = null;
    }
    else this.addFamilyMenu = true
  }

  toggleUpdatePlanMenu(){
    window.scrollTo(0,0);
    if(this.planChangeMenu == true)
      this.planChangeMenu = false
    else this.planChangeMenu = true;
  }

  // submit request to backend for approval, pass in the addMembersArray and removeMembersArray
  submitUpdatePlanRequest(){

  }

  onResize($event){
    this.displayRelationships = false;
    this.displayDentalTiers = false;
    this.displayMedicalTiers = false;
    this.displayVisionTiers = false;
    this.displayRemoveMemberList = false;
  }

  clearForm(){
    this.addFamilyRef.reset()
    this.relationship = "Relationship"
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

  onClick(event : Event) {

    this.displayRelationships = false;
    this.displayDentalTiers = false;
    this.displayMedicalTiers = false;
    this.displayVisionTiers = false;
    this.displayRemoveMemberList = false;

    let classList = (event.target as Element).classList
    for(let i = 0; i < classList.length; i++){
      if(classList[i] == "relationship"){
        if(this.displayRelationships == false){
          this.displayRelationships = true;
        }
        else this.displayRelationships = false;
      }
      if(classList[i] == "medical"){
        if(this.displayMedicalTiers == false){
          this.displayMedicalTiers = true;
        }
        else this.displayMedicalTiers = false;
      }
      if(classList[i] == "dental"){
        if(this.displayDentalTiers == false){
          this.displayDentalTiers = true;
        }
        else this.displayDentalTiers = false;
      }
      if(classList[i] == "vision"){
        if(this.displayVisionTiers == false){
          this.displayVisionTiers = true;
        }
        else this.displayVisionTiers = false;
      }
      if(classList[i] == "remove-member"){
        if(this.displayRemoveMemberList == false){
          this.displayRemoveMemberList = true;
        }
        else this.displayRemoveMemberList = false;
      }
    }
  }

  //Request to remove family members from current plan
  pushtoRemoveMembersList(dependent: dependent){
    if(this.removeMembersArray.indexOf(dependent) == -1)
      this.removeMembersArray.push(dependent);
  }
  removeFromRemoveMembersList(dependent: dependent){
    this.removeMembersArray.splice(this.removeMembersArray.indexOf(dependent), 1)
  }


  //Request to add family members to plan
  pushtoAddMembersList(){
    if(this.addFamilyRef.invalid || !(this.relationship == "Spouse" || this.relationship == "Daughter" || this.relationship == "Son")){
      this.error_text = "All fields must be filled!"
      this.delay(3000).then(any=>{
        this.error_text = null;
      })
    } else if (this.dateValidation == false || (this.addFamilyRef.value.dob == "" || this.addFamilyRef.value.dob == null)){
      this.error_text = "Invalid date!"
      this.delay(3000).then(any=>{
        this.error_text = null;
      })
    } else {
      let dependent: dependent = {
        Id : null,
        firstName : this.addFamilyRef.value.firstName,
        lastName: this.addFamilyRef.value.lastName,
        email: this.addFamilyRef.value.email,
        dob : this.addFamilyRef.value.dob,
        relationship : this.relationship,
        phoneNumber : this.addFamilyRef.value.phoneNumber,
        authentication : 2
      }
      this.addFamilyRef.reset()
      this.relationship = "Relationship";
      this.addMembersArray.push(dependent);
      console.log(dependent)
      this.message_text = "Added!"
      this.delay(3000).then(any=>{
        this.message_text = null;
      })
    }
  }
  removeFromAddMembersList(){
    this.addMembersArray.splice(this.addMembersArray.indexOf(this.membertoEdit), 1);
    this.editFamilyRef.reset()
    this.editMemberForm = false;
    this.relationship = "Relationship";
  }


  //Edit family member from AddMembersList
  editFamilyMember(){
    if(this.editFamilyRef.invalid || !(this.relationship == "Spouse" || this.relationship == "Daughter" || this.relationship == "Son")){
      this.error_text = "All fields must be filled!"
      this.delay(3000).then(any=>{
        this.error_text = null;
      })
    } else if (this.dateValidation == false || (this.editFamilyRef.value.dob == "" || this.editFamilyRef.value.dob == null)){
      this.error_text = "Invalid date!"
      this.delay(3000).then(any=>{
        this.error_text = null;
      })
    } else {
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].firstName = this.editFamilyRef.controls['firstName'].value;
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].lastName = this.editFamilyRef.controls['lastName'].value;
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].email = this.editFamilyRef.controls['email'].value;
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].dob = this.editFamilyRef.controls['dob'].value;
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].phoneNumber = this.editFamilyRef.controls['phoneNumber'].value;
        this.addMembersArray[this.addMembersArray.indexOf(this.membertoEdit)].relationship = this.relationship;
        this.membertoEdit = null;
        this.editMemberForm = false;
        this.editFamilyRef.reset();
        this.relationship = "Relationship"
    }
  }

  openEditMemberForm(member : dependent){
    if(this.editMemberForm == false){
      this.membertoEdit = member;
      this.editFamilyRef.setValue({
        firstName : member.firstName,
        lastName: member.lastName,
        email: member.email,
        dob: member.dob,
        phoneNumber: member.phoneNumber,
        // relationship: member.relationship
      })
      this.relationship = member.relationship

      this.editMemberForm = true;
    } else{
        this.membertoEdit = null;
        this.editMemberForm = false;
        this.editFamilyRef.reset();
        this.relationship = "Relationship"
    }
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }





}
