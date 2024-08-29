import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoPageComponent } from './account-info-page.component';

describe('AccountInfoPageComponent', () => {
  let component: AccountInfoPageComponent;
  let fixture: ComponentFixture<AccountInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountInfoPageComponent]
    });
    fixture = TestBed.createComponent(AccountInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
