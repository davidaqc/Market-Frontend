import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  categories = [
    {
      name: 'ABARROTES',
      subcategories: [
        "Aceites", "Artículos de papel", "Bebidas", "Cereales", "Café y té",
        "Chocolates", "Condimentos", "Confites", "Cuidado personal", "Desechables",
        "Enlatados", "Envolturas", "Galletas", "Granos", "Harinas", "Jaleas",
        "Lácteos", "Libre de gluten", "Licores", "Limpieza", "Pastas", "Salsas",
        "Siropes", "Snacks", "Sopas y consomés", "Suplementos"
      ]
    },
    {
      name: 'HOGAR',
      subcategories: [
        "Adornos y decoración", "Alfombras", "Baño", "Cristalería", "Plástico",
        "Lavandería", "Cerámica", "Cocina", "Temporada lluviosa", "Maletas",
        "Escolar y oficina", "Candelas y candelabros", "Camping e inflables",
        "Dormitorio", "Portarretratos", "Cortinas & persianas", "Fiesta",
        "Juguetes", "Electrodomésticos", "Bebés y damas", "Artículos deportivos",
        "Espejos", "Equipo médico-mascarillas", "Canastas"
      ]
    },
    {
      name: 'MUEBLES',
      subcategories: [
        "Estantes", "Muebles De Jardín", "Oficina", "Sillas Básicas", "Bancos",
        "Muebles De Dormitorio", "Muebles De Cocina", "Mesas Decorativas", "Muebles Plegables", "Repisas",
        "Zapateras", "Ottoman", "Mesas Industriales", "Muebles Infantiles", "Muebles De Tv",
        "Camas, Camarotes Y Colchones", "Sillón"
      ]
  },
  {
      name: 'FERRETERÍA',
      subcategories: [
        "Construcción", "Herramientas", "Iluminación", "Seguridad", "Accesorios de Ferretería",
        "Jardinería", "Artículos Eléctricos", "Artículos para Carro", "Artículos para Motocicletas", "Acabados"
      ]
  },
  {
      name: 'MASCOTAS',
      subcategories: [
          "Gatos", "Perros",
      ]
  },
  {
      name: 'MES DEL NIÑO',
      subcategories: [
          "Subcategory 1",
      ]
  },
  {
      name: 'ELECTRODOMÉSTICOS',
      subcategories: [
          "Subcategory 1", "Subcategory 2"
      ]
  },
  // {
  //     name: 'MI NEGOCIO LIMPIO',
  //     subcategories: [
  //         "Subcategory 1", "Subcategory 2", "Subcategory 3"
  //     ]
  // }
  ];

  activeCategory: any = null;

  setActiveCategory(category: any) {
    this.activeCategory = category;
  }

  clearActiveCategory() {
    this.activeCategory = null;
  }

}
