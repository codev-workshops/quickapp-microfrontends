import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Customer List</h2>
    <p>This micro-frontend was extracted from the monolith's customer module.</p>
    <p>TODO: Migrate list logic from monolith's customer component.</p>
    <ul>
      <li *ngFor="let item of items">
        <a [routerLink]="[item.id]">{{ item.name }}</a>
      </li>
    </ul>
  `,
})
export class CustomerListComponent implements OnInit {
  items: Array<{ id: number; name: string }> = [];

  ngOnInit(): void {
    // TODO: Inject HttpClient and call the customer microservice API
    this.items = [
      { id: 1, name: 'Sample Customer 1' },
      { id: 2, name: 'Sample Customer 2' },
    ];
  }
}
