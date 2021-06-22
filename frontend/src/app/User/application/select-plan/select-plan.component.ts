import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css'],
  host: {'(document:click)': 'onClick($event)'}
})
export class SelectPlanComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router, private route : ActivatedRoute, private renderer: Renderer2) { }

  // triggers to display tier list dropdowns
  displayMedicalTiers : boolean = false;
  displayVisionTiers : boolean = false;
  displayDentalTiers : boolean = false;

  //triggers to display tier container
  isMedical : boolean = false;
  isDental : boolean = false;
  isVision : boolean = false;

  //dental, medical and vision tier selection
  medicalTier  = null;
  dentalTier = null;
  visionTier = null;

  //tier array
  Tiers = [1, 2, 3]

  // error trigger
  error : boolean = false;

  //errors array
  errors = [];

  //Desktop
  @ViewChild('medical') medical: ElementRef;
  @ViewChild('medicalTiers') medicalTiers: ElementRef;

  @ViewChild('dental') dental: ElementRef;
  @ViewChild('dentalTiers') dentalTiers : ElementRef;

  @ViewChild('vision') vision : ElementRef;
  @ViewChild('visionTiers') visionTiers : ElementRef;


  ngOnInit(): void {
  }

  ngAfterViewChecked() {
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

  onClick(event : Event) {
    this.displayMedicalTiers = false;
    this.displayDentalTiers = false;
    this.displayVisionTiers = false;

    let classList = (event.target as Element).classList
    for(let i = 0; i < classList.length; i++){
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
    }
   }

   dentalTierSelection(tier){
    this.dentalTier = tier;
   }

   medicalTierSelection(tier){
    this.medicalTier = tier;
   }

   visionTierSelection(tier){
    this.visionTier = tier;
   }

   returntoCreateProfile(){
    this.router.navigate(['../create_profile'],  {relativeTo: this.route});
   }

   addDependents(){
    this.errors = [];
    this.error = false;
    if(this.isMedical && this.medicalTier == null){
      this.errors.push("Medical tier must be selected");
    }
    if(this.isDental && this.dentalTier == null){
      this.errors.push("Dental tier must be selected");
    }
    if(this.isVision && this.visionTier == null){
      this.errors.push("Vision tier must be selected");
    }
    if(this.errors.length == 0){
      this.router.navigate(['../add_dependents'],  {relativeTo: this.route});
    } else{
        this.error = true;
    }
   }

   clearForm(){

   }

   async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


}
