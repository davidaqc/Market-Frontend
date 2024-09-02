import { Component } from '@angular/core';

@Component({
  selector: 'app-new-product-slider',
  templateUrl: './new-product-slider.component.html',
  styleUrls: ['./new-product-slider.component.scss']
})
export class NewProductSliderComponent {
  products = [
    { name: 'Anteojos natación edad 14+ Bestway', image: 'assets/images/anteojos_natacion.jpg', price: 2000 },
    { name: 'Gaseosa minilata Coca Cola 237ml 12unds', image: 'assets/images/bebida_avena.jpg', price: 14500 },
    { name: 'Hamaca asiento cojín Polialgodón 100x130cm', image: 'assets/images/camarote_individual.jpg', price: 8000 },
    { name: 'Bebida avena Natur-a 946ml', image: 'assets/images/gaseosa_minilata_coca_cola.jpg', price: 3000 },
    { name: 'Hamaca tela rayas Algodón 80x200x265cm', image: 'assets/images/hamaca_asiento_cojin.jpg', price: 9000 },
    { name: 'Camarote individual metálico 200x107x149cm', image: 'assets/images/hamaca_tela_rayas.jpg', price: 22000 },
    { name: 'Hielera con agarradera Plástica Igloo 47lt', image: 'assets/images/hielera_agarradera.jpg', price: 5500 }
  ];
}
