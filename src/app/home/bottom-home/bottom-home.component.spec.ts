import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomHomeComponent } from './bottom-home.component';

describe('BottomHomeComponent', () => {
  let component: BottomHomeComponent;
  let fixture: ComponentFixture<BottomHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomHomeComponent]
    });
    fixture = TestBed.createComponent(BottomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
