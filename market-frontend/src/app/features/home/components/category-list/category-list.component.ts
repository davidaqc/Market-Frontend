import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
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

  ngOnInit() {
    this.updateVisibleCategories();
  }

  updateVisibleCategories() {
    if (this.currentIndex + this.itemsToShow > this.categories.length) {
      // Slice from currentIndex to end of categories and from start to fit itemsToShow
      this.visibleCategories = [
        ...this.categories.slice(this.currentIndex),
        ...this.categories.slice(0, (this.currentIndex + this.itemsToShow) % this.categories.length)
      ];
    } else {
      this.visibleCategories = this.categories.slice(this.currentIndex, this.currentIndex + this.itemsToShow);
    }
  }

  nextSlide() {
    if (this.currentIndex + this.itemsToShow >= this.categories.length) {
      // Reset to start if at the end
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateVisibleCategories();
  }  

  previousSlide() {
    if (this.currentIndex === 0) {
      // Reset to the end if at the start
      this.currentIndex = this.categories.length - this.itemsToShow;
    } else {
      this.currentIndex--;
    }
    this.updateVisibleCategories();
  }
  
}
