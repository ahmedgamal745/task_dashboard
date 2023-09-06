import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySalesComponent } from './hourly-sales.component';

describe('HourlySalesComponent', () => {
  let component: HourlySalesComponent;
  let fixture: ComponentFixture<HourlySalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlySalesComponent]
    });
    fixture = TestBed.createComponent(HourlySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
