import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCartPageComponent } from './review-cart-page.component';

describe('ReviewCartPageComponent', () => {
  let component: ReviewCartPageComponent;
  let fixture: ComponentFixture<ReviewCartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewCartPageComponent]
    });
    fixture = TestBed.createComponent(ReviewCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
