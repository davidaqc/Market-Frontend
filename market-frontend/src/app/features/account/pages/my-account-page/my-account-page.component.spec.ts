import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountPageComponent } from './my-account-page.component';

describe('MyAccountPageComponent', () => {
  let component: MyAccountPageComponent;
  let fixture: ComponentFixture<MyAccountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountPageComponent]
    });
    fixture = TestBed.createComponent(MyAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
