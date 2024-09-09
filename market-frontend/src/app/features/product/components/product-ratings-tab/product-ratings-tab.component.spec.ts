import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRatingsTabComponent } from './product-ratings-tab.component';

describe('ProductRatingsTabComponent', () => {
  let component: ProductRatingsTabComponent;
  let fixture: ComponentFixture<ProductRatingsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRatingsTabComponent]
    });
    fixture = TestBed.createComponent(ProductRatingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
