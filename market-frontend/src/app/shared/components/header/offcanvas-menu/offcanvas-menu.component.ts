import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas-menu',
  templateUrl: './offcanvas-menu.component.html',
  styleUrls: ['./offcanvas-menu.component.scss']
})
export class OffcanvasMenuComponent {
  categories = [
    {
      id: 'abarrotes',
      name: 'ABARROTES',
      subcategories: ['Subcategory 1', 'Subcategory 2']
    },
    {
      id: 'hogar',
      name: 'HOGAR',
      subcategories: ['Subcategory 1', 'Subcategory 2']
    },
    {
      id: 'muebles',
      name: 'MUEBLES',
      subcategories: ['Subcategory 1', 'Subcategory 2']
    },
    {
      id: 'ferreteria',
      name: 'FERRETERÍA',
      subcategories: ['Subcategory 1', 'Subcategory 2']
    },
    {
      id: 'mascotas',
      name: 'MASCOTAS',
      subcategories: ['GATOS', 'PERROS']
    }
  ];
}
