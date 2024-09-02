import { Component } from '@angular/core';

@Component({
  selector: 'app-new-address-book-page',
  templateUrl: './new-address-book-page.component.html',
  styleUrls: ['./new-address-book-page.component.scss']
})
export class NewAddressBookPageComponent {
  nombre: string = 'David';
  apellido: string = 'Quesada';
  telefono: string = '';
  ubicacion: string = '';
  provincia: string = '';
  canton: string = '';
  distrito: string = '';
  direccion: string = '';
  direccionPredeterminada: boolean = false;
}
