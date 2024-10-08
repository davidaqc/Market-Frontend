import { Component } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent {
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
}