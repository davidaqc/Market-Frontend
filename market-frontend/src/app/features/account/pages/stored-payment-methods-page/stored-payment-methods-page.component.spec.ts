import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredPaymentMethodsPageComponent } from './stored-payment-methods-page.component';

describe('StoredPaymentMethodsPageComponent', () => {
  let component: StoredPaymentMethodsPageComponent;
  let fixture: ComponentFixture<StoredPaymentMethodsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoredPaymentMethodsPageComponent]
    });
    fixture = TestBed.createComponent(StoredPaymentMethodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
