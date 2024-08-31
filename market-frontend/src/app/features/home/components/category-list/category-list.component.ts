import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = [
    { name: 'Espejos', image: 'assets/images/espejos.png' },
    { name: 'Herramientas', image: 'assets/images/herramientas.png' },
    { name: 'Jardinería', image: 'assets/images/jardineria.png' },
    { name: 'Limpieza', image: 'assets/images/limpieza.png' },
    { name: 'Art. para carros', image: 'assets/images/art-carros.png' },
    { name: 'Bancos y sillas', image: 'assets/images/bancos.png' },
    { name: 'Electrodomésticos', image: 'assets/images/electrodomesticos.png' },
    { name: 'Escolar', image: 'assets/images/escolar.png' }
  ];

  visibleCategories: any[] = [];
  currentIndex = 0;
  itemsToShow = 5;
  translateX = 0;
  itemWidth = 200;

  ngOnInit() {
    this.updateItemsToShow();
    this.updateVisibleCategories();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsToShow();
    this.updateVisibleCategories();
  }

  updateItemsToShow() {
    const width = window.innerWidth;
    if (width < 576) this.itemsToShow = 2;
    else if (width < 992) this.itemsToShow = 4;
    else this.itemsToShow = 5;

    document.documentElement.style.setProperty('--items-to-show', this.itemsToShow.toString());
    
    const containerWidth = document.querySelector('.carousel-container')?.clientWidth || 200 * this.itemsToShow;
    this.itemWidth = containerWidth / this.itemsToShow;
    document.documentElement.style.setProperty('--item-width', `${this.itemWidth}px`);

    this.translateX = 0;
    this.currentIndex = 0;
  }

  updateVisibleCategories() {
    this.visibleCategories = [];
    for (let i = 0; i < this.itemsToShow + 2; i++) {
      const index = (this.currentIndex + i) % this.categories.length;
      this.visibleCategories.push(this.categories[index]);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.categories.length;
    this.updateVisibleCategories();
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.categories.length) % this.categories.length;
    this.updateVisibleCategories();
  }

}