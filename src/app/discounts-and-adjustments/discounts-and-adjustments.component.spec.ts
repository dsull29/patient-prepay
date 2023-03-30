import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsAndAdjustmentsComponent } from './discounts-and-adjustments.component';

describe('DiscountsAndAdjustmentsComponent', () => {
  let component: DiscountsAndAdjustmentsComponent;
  let fixture: ComponentFixture<DiscountsAndAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountsAndAdjustmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountsAndAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
