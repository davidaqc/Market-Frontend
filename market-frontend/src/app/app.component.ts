import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-frontend';

  constructor(private router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
