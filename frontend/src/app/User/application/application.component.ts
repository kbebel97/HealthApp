import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private httpService: HttpClient, private renderer: Renderer2) { }

  ngOnInit(){

  }

  // countryList1;
  // countryList1Copy;
  // countryList2;
  // stateList;
  // selectedMenu;

  // displayMedicalTiers : boolean = false;
  // displayVisionTiers : boolean = false;
  // displayDentalTiers : boolean = false;


  // //Desktop
  // @ViewChild('medical') medical: ElementRef;
  // @ViewChild('medicalTiers') medicalTiers: ElementRef;

  // @ViewChild('dental') dental: ElementRef;
  // @ViewChild('dentalTiers') dentalTiers : ElementRef;

  // @ViewChild('vision') vision : ElementRef;
  // @ViewChild('visionTiers') visionTiers : ElementRef;

  // //Mobile
  // @ViewChild('medicalMobile') medicalMobile: ElementRef;
  // @ViewChild('medicalTiersMobile') medicalTiersMobile: ElementRef;

  // @ViewChild('dentalMobile') dentalMobile: ElementRef;
  // @ViewChild('dentalTiersMobile') dentalTiersMobile : ElementRef;

  // @ViewChild('visionMobile') visionMobile : ElementRef;
  // @ViewChild('visionTiersMobile') visionTiersMobile : ElementRef;

  // //Country
  // @ViewChild('divCountry') divCountry: ElementRef;
  // @ViewChild('divCountryList') divCountryList: ElementRef;

  // //Marital
  // @ViewChild('divMarital') divMarital: ElementRef;
  // @ViewChild('divMaritalList') divMaritalList: ElementRef;

  // //State
  // @ViewChild('divState') divState: ElementRef;
  // @ViewChild('divStateList') divStateList: ElementRef;

  // ngOnInit(): void {
  //   this.maritalStatus = "Status";
  //   this.country = "Country";
  //   this.state = ""
  //   this.selectedMenu = "profileMenu"


  //   this.httpService.get('./assets/countryList1.json').subscribe(
  //     data => {
  //       this.countryList1 = data as string [];
  //       this.countryList1Copy = data as string [];
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );

  //   this.httpService.get('./assets/countryList2.json').subscribe(
  //     data => {
  //       this.countryList2 = data as string [];
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );

  //   this.httpService.get('./assets/stateList.json').subscribe(
  //     data => {
  //       this.stateList = data as string [];
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }

  // ngAfterViewChecked() {
  //   if(this.divCountry){
  //     let displayCountriesWidth = this.divCountry.nativeElement.offsetWidth;
  //     if(this.divCountryList)
  //       this.renderer.setStyle(this.divCountryList.nativeElement, 'width', displayCountriesWidth + 'px');

  //     let displayMaritalWidth = this.divMarital.nativeElement.offsetWidth;
  //     if(this.divMaritalList)
  //       this.renderer.setStyle(this.divMaritalList.nativeElement, 'width', displayMaritalWidth + 'px');

  //     if(this.divState){
  //       let displayStateWidth = this.divState.nativeElement.offsetWidth;
  //       if(this.divStateList)
  //         this.renderer.setStyle(this.divStateList.nativeElement, 'width', displayStateWidth + 'px');
  //     }
  //   }
  // }

  // onClick(event : Event) {
  //   this.countryList1 = this.countryList1Copy;

  //   this.displayCountries = false;
  //   this.displayMaritalStatuses = false;
  //   this.displayStates = false;

  //   let classList = (event.target as Element).classList
  //   for(let i = 0; i < classList.length; i++){
  //     if(classList[i] == "country"){
  //       if(this.displayCountries == false){
  //         this.displayCountries = true;
  //       }
  //       else this.displayCountries = false;
  //     }
  //     if(classList[i] == "marital"){
  //       if(this.displayMaritalStatuses == false){
  //         this.displayMaritalStatuses = true;
  //       } else this.displayMaritalStatuses = false;
  //     }
  //     if(classList[i] == "state"){
  //       if(this.displayStates == false){
  //         this.displayStates = true;
  //       } else this.displayStates = false;
  //     }
  //     if(classList[i] == "medical"){
  //       if(this.displayMedicalTiers == false){
  //         this.displayMedicalTiers = true;
  //       }
  //       else this.displayMedicalTiers = false;
  //     }
  //     if(classList[i] == "dental"){
  //       if(this.displayDentalTiers == false){
  //         this.displayDentalTiers = true;
  //       }
  //       else this.displayDentalTiers = false;
  //     }
  //     if(classList[i] == "vision"){
  //       if(this.displayVisionTiers == false){
  //         this.displayVisionTiers = true;
  //       }
  //       else this.displayVisionTiers = false;
  //     }

  //   }
  //  }

  // createProfile(){
  //   console.log(this.profileRef.valid);
  //   if(this.profileRef.invalid){
  //     this.error = true;
  //     this.delay(3000).then(any=>{
  //       this.error = false;
  //     })
  //   }
  //   // else
  //   this.selectedMenu = "planMenu"
  // }

  // maritalStatuses = ["Single", "Married", "Divorced", "Widowed"]
  // selectedValue: string;
  // options : Array<string> = ["Hello", "goodbye", "bye bye", "NY"]
  // default : string = "Kacper";

  // dateValidation : boolean = true;

  // displayCountries : boolean = false;
  // displayStates : boolean = false;

  // displayMaritalStatuses : boolean = false;
  // displayHealthPlans : boolean = false;

  // maritalStatus : string;
  // country : string;
  // state : string;

  // error : boolean = false;

  // profileRef = new FormGroup({
  //   // plan : new FormControl(null, {validators: [Validators.required]}),
  //   firstName : new FormControl(null, {validators: [Validators.required]}),
  //   lastName : new FormControl(null, {validators: [Validators.required]}),
  //   dob : new FormControl(null, {validators: [Validators.required]}),
  //   occupation: new FormControl(null, {validators: [Validators.required]}),
  //   phoneNumber : new FormControl(null, {validators: [Validators.required]})
  // })

  // validateDate(e){
  //   console.log(e.target.value);
  //   var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
  //   console.log(date_regex.test(e.target.value));
  //   if(e.target.value== null || e.target.value== ""){
  //     this.dateValidation = true;
  //   } else {
  //     if(!date_regex.test(e.target.value)){
  //       this.dateValidation = false;
  //     } else this.dateValidation = true
  //   }
  // }

  // isUSA(){
  //   return this.country == "United States of America (the)" ? true : false;
  // }


  // updateProfile(){
  //   console.log(this.profileRef.valid);
  //   if(this.profileRef.invalid){
  //     this.error = true;
  //     this.delay(3000).then(any=>{
  //       this.error = false;
  //     })
  //   }
  // }

  // save(){
  //   window.scrollTo(0,0);
  // }

  // clearForm(){
  //   this.maritalStatus = "Status";
  //   this.country = "Country";
  //   this.state = "";
  //   this.dateValidation = true;
  // }

  // countrySelect(country : string){
  //   this.country = country;
  // }

  // maritalSelect(maritalStatus : string){
  //   this.maritalStatus = maritalStatus;
  // }

  // stateSelect(state : string){
  //   this.state = state;
  // }


  // async delay(ms: number) {
  //   return new Promise( resolve => setTimeout(resolve, ms) );
  // }


}
