import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsTabComponent } from './product-details-tab.component';

describe('ProductDetailsTabComponent', () => {
  let component: ProductDetailsTabComponent;
  let fixture: ComponentFixture<ProductDetailsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsTabComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
