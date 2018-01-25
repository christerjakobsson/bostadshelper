import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BostadsCalculationsComponent } from './bostads-calculations.component';

describe('BostadsCalculationsComponent', () => {
  let component: BostadsCalculationsComponent;
  let fixture: ComponentFixture<BostadsCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostadsCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BostadsCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('kontantinsats should be correct', () => {
    expect(component.calculateKontantInsats("2000000", 0.15)).toBe(300000)
  });

});
