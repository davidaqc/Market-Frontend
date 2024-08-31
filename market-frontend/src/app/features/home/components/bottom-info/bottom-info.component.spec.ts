import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomInfoComponent } from './bottom-info.component';

describe('BottomInfoComponent', () => {
  let component: BottomInfoComponent;
  let fixture: ComponentFixture<BottomInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomInfoComponent]
    });
    fixture = TestBed.createComponent(BottomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
