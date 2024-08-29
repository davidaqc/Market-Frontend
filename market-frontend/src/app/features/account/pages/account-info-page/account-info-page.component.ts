import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.scss']
})
export class AccountInfoPageComponent {

  nombre: string = 'David';
  apellido: string = 'Quesada';
  correo: string = 'davidqc05@gmail.com';
  cambiarCorreo: boolean = false;
  cambiarContrasena: boolean = false;
}
