import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookPageComponent } from './address-book-page.component';

describe('AddressBookPageComponent', () => {
  let component: AddressBookPageComponent;
  let fixture: ComponentFixture<AddressBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBookPageComponent]
    });
    fixture = TestBed.createComponent(AddressBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
