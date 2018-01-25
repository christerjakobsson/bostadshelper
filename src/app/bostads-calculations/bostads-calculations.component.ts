import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Values } from './values';

@Component({
  selector: 'bostads-calculations',
  templateUrl: './bostads-calculations.component.html',
  styleUrls: ['./bostads-calculations.component.css']
})

export class BostadsCalculationsComponent implements OnInit {
  private values: Values;    
  private lagfart: number = 0;
  private pantbrev: number = 0;
  private kontantinsats: number;
  private summa: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.values = new Values();    
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(!!params['url'] && params['url'] !== 'undefined') {
        var url = params['url'];
        this.getInformationFromUrl(url);
      }      
    });
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

  getInformationFromUrl(url: string) {
    //MAKE call to api with url, api will then scrape the site for the needed values.
  }
}
