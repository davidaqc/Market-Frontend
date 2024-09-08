import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessAlertComponent } from './sucess-alert.component';

describe('SucessAlertComponent', () => {
  let component: SucessAlertComponent;
  let fixture: ComponentFixture<SucessAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessAlertComponent]
    });
    fixture = TestBed.createComponent(SucessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
