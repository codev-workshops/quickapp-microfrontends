import { Routes } from '@angular/router';

export const REMOTE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./identity-list/identity-list.component').then(
        m => m.IdentityListComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./identity-detail/identity-detail.component').then(
        m => m.IdentityDetailComponent
      ),
  },
];
