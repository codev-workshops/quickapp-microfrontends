import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/home">Home</a>
      <a routerLink="/identity">Identity</a>
      <a routerLink="/customers">Customers</a>
      <a routerLink="/orders">Orders</a>
      <a routerLink="/products">Products</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #1976d2;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .navbar a:hover {
      background: rgba(255,255,255,0.1);
    }
    main {
      padding: 1rem;
    }
  `],
})
export class AppComponent {
  title = 'Decomposed Micro-Frontend Shell';
}
