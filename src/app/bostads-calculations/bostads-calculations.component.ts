import { Component, OnInit } from '@angular/core';
import { Values } from './values';

@Component({
  selector: 'bostads-calculations',
  templateUrl: './bostads-calculations.component.html',
  styleUrls: ['./bostads-calculations.component.css']
})
export class BostadsCalculationsComponent implements OnInit {
  public values: Values;    
  lagfart: number = 0;
  pantbrev: number = 0;
  kontantinsats: number;
  summa: number;

  constructor() {
    this.values = new Values();
    console.log(this.values);
  }

  ngOnInit() {
  }

  onChange() {
    this.kontantinsats = this.calculateKontantInsats(this.values.price, this.values.kontantInsatsPercent / 100);
    this.lagfart = this.calculateLagfart(this.values.price);
    this.pantbrev = this.calculatePantbrev(this.values.price, this.values.mortgages, this.values.kontantInsatsPercent / 100);
    this.summa = this.kontantinsats + this.lagfart + this.pantbrev;
  }

  calculateKontantInsats(price, percent) {
    return price * percent;
  }

  calculateLagfart(price) {
    let lagfartAdminAvgift = 825;    
    return (price * 0.015) + lagfartAdminAvgift;
  }

  calculatePantbrev(price, mortgages, kontantInsatsPercent) {
    if(!mortgages) {
      return 0;
    }    
    let loan = price * (1 - kontantInsatsPercent); // TODO make slider for kontantinsats 
    let pantbrev = loan - mortgages;
    return (pantbrev * 0.02) + 375;
  }
}
