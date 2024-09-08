import { Component, Input } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb p-2">
        <li class="breadcrumb-item">
          <a routerLink="/"><i class="fas fa-home"></i></a>
        </li>
        <li *ngFor="let item of items; let last = last" 
            class="breadcrumb-item" 
            [class.active]="last" 
            [attr.aria-current]="last ? 'page' : null">
          <a *ngIf="!last" [routerLink]="item.url">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumb {
      background-color: #bcbec0;
    }
    .breadcrumb-item + .breadcrumb-item::before {
      content: ">";
      color: white;
    }
    .breadcrumb-item a, .breadcrumb-item.active {
      color: white;
    }
    .breadcrumb-item a:hover {
      text-decoration: underline;
    }
  `]
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}