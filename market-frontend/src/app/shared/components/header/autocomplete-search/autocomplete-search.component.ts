import { Component, Output, EventEmitter } from '@angular/core';
import { AutocompleteItem } from '../../../../core/models/autocomplete-item.model';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss']
})
export class AutocompleteSearchComponent {
  @Output() close = new EventEmitter<void>();

  products: AutocompleteItem[] = [
    {
      name: 'Taza doble pared vidrio 8oz 2unds',
      sku: '07190206',
      description:
        'Paquete con 2 unidades de tazas de vidrio borosilicato alto de doble p...',
      price: 3000,
      image: 'assets/images/taza-doble.jpg',
    },
    {
      name: 'Taza caballito de mar cerámica 16oz',
      sku: '07022007',
      description:
        'Taza en forma de caballito de mar con capacidad de 16 onzas. Producto ...',
      price: 1700,
      image: 'assets/images/taza-caballito.jpg',
    },
    {
      name: 'Taza pez cerámica 16oz',
      sku: '07022006',
      description:
        'Taza en forma de pez con capacidad de 16 onzas. Producto no apto para ...',
      price: 1800,
      image: 'assets/images/taza-pez.jpg',
    },
    {
      name: 'Olla arrocera 8 tazas Holstein',
      sku: '10030325',
      description:
        'Olla arrocera con capacidad de 1.5 litros para hacer 8 tazas de arroz...',
      price: 17500,
      image: 'assets/images/olla-arrocera.jpg',
    },
  ];

  closeSearchResults() {
    this.close.emit();
  }
}
