import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Decomposed Application — Micro-Frontend Shell</h1>
    <p>This is the host shell for the decomposed Angular micro-frontends.</p>
    <p>Each feature module (Identity, Customers, Orders, Products) is loaded as an independent remote application via Webpack Module Federation.</p>
  `,
})
export class HomeComponent {}
