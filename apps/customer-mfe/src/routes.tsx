import React from 'react';
import { RouteObject } from 'react-router-dom';

const CustomerListPage = React.lazy(() => import('./pages/CustomerListPage'));
const CustomerDetailPage = React.lazy(() => import('./pages/CustomerDetailPage'));

export const remoteRoutes: RouteObject[] = [
  {
    index: true,
    element: <React.Suspense fallback={<p>Loading...</p>}><CustomerListPage /></React.Suspense>,
  },
  {
    path: ':id',
    element: <React.Suspense fallback={<p>Loading...</p>}><CustomerDetailPage /></React.Suspense>,
  },
];
