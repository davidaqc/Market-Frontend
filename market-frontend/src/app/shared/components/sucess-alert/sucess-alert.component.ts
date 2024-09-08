import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styleUrls: ['./sucess-alert.component.scss']
})
export class SucessAlertComponent {
  @Input() message: string = '';
}
