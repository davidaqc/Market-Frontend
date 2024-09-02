import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPageComponent } from './reviews-page.component';

describe('ReviewsPageComponent', () => {
  let component: ReviewsPageComponent;
  let fixture: ComponentFixture<ReviewsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsPageComponent]
    });
    fixture = TestBed.createComponent(ReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
