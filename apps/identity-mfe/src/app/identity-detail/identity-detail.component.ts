import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-identity-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Identity Detail</h2>
    <p>Viewing identity ID: {{ id }}</p>
    <p>TODO: Migrate detail view from monolith's identity component.</p>
  `,
})
export class IdentityDetailComponent implements OnInit {
  id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
