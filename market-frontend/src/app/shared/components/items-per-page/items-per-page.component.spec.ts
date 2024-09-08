import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPerPageComponent } from './items-per-page.component';

describe('ItemsPerPageComponent', () => {
  let component: ItemsPerPageComponent;
  let fixture: ComponentFixture<ItemsPerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsPerPageComponent]
    });
    fixture = TestBed.createComponent(ItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
