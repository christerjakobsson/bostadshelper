import { 
  Component, Input
} from '@angular/core';

import { Values } from './values';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bostadshelper';
  public values: Values;    
  lagfart = 0;
  pantbrev = 0;

  constructor() {
    this.values = new Values();
    console.log(this.values);
  }

  onChange() {
    this.lagfart = this.calculateLagfart(this.values.price);
    this.pantbrev = this.calculatePantbrev(this.values.price, this.values.mortgages);
  }

  calculateLagfart(price) {
    let lagfartAdminAvgift = 825;    
    return (price * 0.015) + lagfartAdminAvgift;
  }

  public calculatePantbrev(price, mortgages) {    
    const loan = price * 0.85; // TODO make slider for kontantinsats 
    let pantbrev = price - mortgages;
    return (pantbrev * 0.02) + 375;
  }
}
