import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions-page',
  templateUrl: './terms-and-conditions-page.component.html',
  styleUrls: ['./terms-and-conditions-page.component.scss']
})
export class TermsAndConditionsPageComponent {
  constructor(private router: Router) {}

  scrollTo(id: string): void {
    this.router.navigate([], { fragment: id });
  }
}
