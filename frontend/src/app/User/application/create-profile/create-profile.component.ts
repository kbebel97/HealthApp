import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  host: {'(document:click)': 'onClick($event)'}
})
export class CreateProfileComponent implements OnInit, AfterViewChecked {

  constructor(private httpService: HttpClient, private renderer: Renderer2, private router: Router, private route: ActivatedRoute) { }

  countryList1;
  countryList1Copy;
  countryList2;
  stateList;

  // defualt values for country, state and marital status
  maritalStatus : string;
  country : string;
  state : string = "State";

  // error trigger boolean
  error : boolean = false;

  //error text string
  error_text: string;

  // date validation trigger, default status of dateValidation bool is true since it is empty by default
  dateValidation : boolean = true;

  // triggers for dropdown menus
  displayCountries : boolean = false;
  displayStates : boolean = false;
  displayMaritalStatuses : boolean = false;

  // marital statuses array
  maritalStatuses = ["Single", "Married", "Divorced", "Widowed"]


  //Country
  @ViewChild('divCountry') divCountry: ElementRef;
  @ViewChild('divCountryList') divCountryList: ElementRef;

  //Marital
  @ViewChild('divMarital') divMarital: ElementRef;
  @ViewChild('divMaritalList') divMaritalList: ElementRef;

  //State
  @ViewChild('divState') divState: ElementRef;
  @ViewChild('divStateList') divStateList: ElementRef;

  profileRef = new FormGroup({
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    dob : new FormControl(null, {validators: [Validators.required]}),
    occupation: new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]}),
    street : new FormControl(null, {validators: [Validators.required]}),
    zip : new FormControl(null, {validators: [Validators.required]}),
    city : new FormControl(null, {validators: [Validators.required]})
  })

  ngOnInit(): void {
    this.maritalStatus = "Marital Status";
    this.country = "Country";
    this.state = "State"

    //retrieves country list and state list from JSON files
    this.httpService.get('./assets/countryList1.json').subscribe(
      data => {
        this.countryList1 = data as string [];
        this.countryList1Copy = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.httpService.get('./assets/countryList2.json').subscribe(
      data => {
        this.countryList2 = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.httpService.get('./assets/stateList.json').subscribe(
      data => {
        this.stateList = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  ngAfterViewChecked() {
    if(this.divCountry){
      let displayCountriesWidth = this.divCountry.nativeElement.offsetWidth;
      if(this.divCountryList)
        this.renderer.setStyle(this.divCountryList.nativeElement, 'width', displayCountriesWidth + 'px');

      let displayMaritalWidth = this.divMarital.nativeElement.offsetWidth;
      if(this.divMaritalList)
        this.renderer.setStyle(this.divMaritalList.nativeElement, 'width', displayMaritalWidth + 'px');

      if(this.divState){
        let displayStateWidth = this.divState.nativeElement.offsetWidth;
        if(this.divStateList)
          this.renderer.setStyle(this.divStateList.nativeElement, 'width', displayStateWidth + 'px');
      }
    }
  }

  // onClick function triggered by clicks on web app
  onClick(event : Event) {
    this.countryList1 = this.countryList1Copy;
    this.displayCountries = false;
    this.displayMaritalStatuses = false;
    this.displayStates = false;

    let classList = (event.target as Element).classList
    for(let i = 0; i < classList.length; i++){
      if(classList[i] == "country"){
        if(this.displayCountries == false){
          this.displayCountries = true;
        }
        else this.displayCountries = false;
      }
      if(classList[i] == "marital"){
        if(this.displayMaritalStatuses == false){
          this.displayMaritalStatuses = true;
        } else this.displayMaritalStatuses = false;
      }
      if(classList[i] == "state"){
        if(this.displayStates == false){
          this.displayStates = true;
        } else this.displayStates = false;
      }
    }
   }

  // prevents jumping to the top of the page while scrolling through countries
  onScroll(e){
  if(e.target.scrollTop == 5324){
    this.countryList1 = [].concat(this.countryList1, this.countryList2);
    }
  }

  createProfile(){
    this.error = false;
    this.error_text = null;
    if((this.profileRef.invalid || (this.country == 'United States of America (the)' && this.state == 'State') || this.maritalStatus == 'Marital Status' || this.country == 'Country') ||
      (this.profileRef.invalid || this.country == 'Country' || this.maritalStatus == 'Marital Status') ){
      document.body.scrollTop = 0;
      this.error_text = "All fields must be filled!"
      this.error = true;
    } else if(!this.dateValidation){
        this.error_text = "Must give a valid birthday!"
        this.error = true;
    }
      else{
        // send to backend
        this.router.navigate(['/apply/select_plan']);
    }
  }

  returntoCreateAccount(){
    this.router.navigate(['../create_account'],  {relativeTo: this.route});
  }

  // select country, marital status and state functions
  countrySelect(country : string){
    this.country = country;
  }
  maritalSelect(maritalStatus : string){
    this.maritalStatus = maritalStatus;
  }
  stateSelect(state : string){
    this.state = state;
  }

  // date validation functions, triggers on any changes in input box
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

  // checks whether selected country is the USA in order to display state input box
  isUSA(){
    return this.country == "United States of America (the)" ? true : false;
  }

  clearForm(){
    this.maritalStatus = "Marital Status";
    this.country = "Country";
    this.state = "State";
    this.dateValidation = true;
  }

  // delay function for error message
  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
