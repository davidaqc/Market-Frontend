import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';

describe('TermsAndConditionsPageComponent', () => {
  let component: TermsAndConditionsPageComponent;
  let fixture: ComponentFixture<TermsAndConditionsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionsPageComponent]
    });
    fixture = TestBed.createComponent(TermsAndConditionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
