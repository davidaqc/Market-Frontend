import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSliderComponent } from './new-product-slider.component';

describe('NewProductSliderComponent', () => {
  let component: NewProductSliderComponent;
  let fixture: ComponentFixture<NewProductSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductSliderComponent]
    });
    fixture = TestBed.createComponent(NewProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
