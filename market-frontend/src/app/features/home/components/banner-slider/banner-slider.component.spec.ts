import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSliderComponent } from './banner-slider.component';

describe('BannerSliderComponent', () => {
  let component: BannerSliderComponent;
  let fixture: ComponentFixture<BannerSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSliderComponent]
    });
    fixture = TestBed.createComponent(BannerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
