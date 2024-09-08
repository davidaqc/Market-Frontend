import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOptionsComponent } from './sort-options.component';

describe('SortOptionsComponent', () => {
  let component: SortOptionsComponent;
  let fixture: ComponentFixture<SortOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortOptionsComponent]
    });
    fixture = TestBed.createComponent(SortOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
