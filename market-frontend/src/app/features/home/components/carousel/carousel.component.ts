import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemTemplate: any;

  visibleItems: any[] = [];
  currentIndex = 0;
  itemsToShow = 5;
  translateX = 0;

  ngOnInit() {
    this.updateItemsToShow();
    this.updateVisibleItems();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsToShow();
    this.updateVisibleItems();
  }

  updateItemsToShow() {
    const width = window.innerWidth;
    if (width < 576) this.itemsToShow = 2;
    else if (width < 992) this.itemsToShow = 4;
    else this.itemsToShow = 5;

    document.documentElement.style.setProperty('--items-to-show', this.itemsToShow.toString());
    this.translateX = 0;
    this.currentIndex = 0;
  }

  updateVisibleItems() {
    this.visibleItems = [];
    for (let i = 0; i < this.itemsToShow; i++) {
      const index = (this.currentIndex + i) % this.items.length;
      this.visibleItems.push(this.items[index]);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateVisibleItems();
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateVisibleItems();
  }
}