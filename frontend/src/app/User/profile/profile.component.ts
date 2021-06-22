import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class ProfileComponent implements OnInit, AfterViewChecked{

  maritalStatuses = ["Single", "Married", "Divorced", "Widowed"]
  selectedValue: string;
  options : Array<string> = ["Hello", "goodbye", "bye bye", "NY"]
  default : string = "Kacper";

  dateValidation : boolean = true;

  displayCountries : boolean = false;
  displayStates : boolean = false;

  displayMaritalStatuses : boolean = false;
  displayHealthPlans : boolean = false;

  maritalStatus : string;
  country : string;
  state : string;

  error : boolean = false;

  countryList1;
  countryList1Copy;
  countryList2;
  stateList;

  profileRef = new FormGroup({
    // plan : new FormControl(null, {validators: [Validators.required]}),
    firstName : new FormControl(null, {validators: [Validators.required]}),
    lastName : new FormControl(null, {validators: [Validators.required]}),
    dob : new FormControl(null, {validators: [Validators.required]}),
    occupation: new FormControl(null, {validators: [Validators.required]}),
    phoneNumber : new FormControl(null, {validators: [Validators.required]}),
    street : new FormControl(null, {validators: [Validators.required]}),
    zip : new FormControl(null, {validators: [Validators.required]}),
    city : new FormControl(null, {validators: [Validators.required]})
  })

  @ViewChild('divCountry') divCountry: ElementRef;
  @ViewChild('divCountryList') divCountryList: ElementRef;

  @ViewChild('divMarital') divMarital: ElementRef;
  @ViewChild('divMaritalList') divMaritalList: ElementRef;

  @ViewChild('divState') divState: ElementRef;
  @ViewChild('divStateList') divStateList: ElementRef;



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

   save(){
     window.scrollTo(0,0);
   }

   onScroll(e){
    if(e.target.scrollTop == 5324){
      this.countryList1 = [].concat(this.countryList1, this.countryList2);
    }
   }



  constructor(private renderer: Renderer2, private httpService: HttpClient) { }

  ngOnInit(): void {
    this.maritalStatus = "Marital Status";
    this.country = "Country";
    this.state = "State"

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

  countrySelect(country : string){
    this.country = country;
  }

  maritalSelect(maritalStatus : string){
    this.maritalStatus = maritalStatus;
  }

  stateSelect(state : string){
    this.state = state;
  }

  updateProfile(){
    this.error = false;
    console.log(this.profileRef.valid);
    if(this.profileRef.invalid){
      this.error = true;
    }
  }

  isUSA(){
    return this.country == "United States of America (the)" ? true : false;
  }

  changeOrderStatus(status: any){
    this.maritalStatus = status;
  }

  changeOption(option){
    console.log(option);
  }
  clearForm(){
    this.maritalStatus = "Status";
    this.country = "Country";
    this.state = "";
    this.dateValidation = true;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
