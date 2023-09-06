import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHomeComponent } from './top-home.component';

describe('TopHomeComponent', () => {
  let component: TopHomeComponent;
  let fixture: ComponentFixture<TopHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHomeComponent]
    });
    fixture = TestBed.createComponent(TopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
