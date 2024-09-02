import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDownloadableProductsPageComponent } from './my-downloadable-products-page.component';

describe('MyDownloadableProductsPageComponent', () => {
  let component: MyDownloadableProductsPageComponent;
  let fixture: ComponentFixture<MyDownloadableProductsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDownloadableProductsPageComponent]
    });
    fixture = TestBed.createComponent(MyDownloadableProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
