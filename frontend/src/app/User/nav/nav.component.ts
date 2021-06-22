import { animate, group, keyframes, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, slideInAnimation } from 'src/app/route-animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class NavComponent implements OnInit {

  buttonNames = []

  buttonOne: boolean = false;
  constructor() {
    this.buttonNames.push('Profile')
    this.buttonNames.push('Family')
    this.buttonNames.push('Plan')
    this.buttonNames.push('Account')

  }

  displayDropdown : boolean = false;

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  }


}
