import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddressBookPageComponent } from './new-address-book-page.component';

describe('NewAddressBookPageComponent', () => {
  let component: NewAddressBookPageComponent;
  let fixture: ComponentFixture<NewAddressBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAddressBookPageComponent]
    });
    fixture = TestBed.createComponent(NewAddressBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
