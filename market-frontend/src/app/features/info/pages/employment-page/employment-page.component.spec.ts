import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentPageComponent } from './employment-page.component';

describe('EmploymentPageComponent', () => {
  let component: EmploymentPageComponent;
  let fixture: ComponentFixture<EmploymentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentPageComponent]
    });
    fixture = TestBed.createComponent(EmploymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
