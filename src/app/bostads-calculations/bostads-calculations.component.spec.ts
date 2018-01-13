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
});
