import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceEligibilityComponent } from './insurance-eligibility.component';

describe('InsuranceEligibilityComponent', () => {
  let component: InsuranceEligibilityComponent;
  let fixture: ComponentFixture<InsuranceEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceEligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
