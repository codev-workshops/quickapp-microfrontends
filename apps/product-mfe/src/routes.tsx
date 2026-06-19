import React from 'react';
import { RouteObject } from 'react-router-dom';

const ProductListPage = React.lazy(() => import('./pages/ProductListPage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));

export const remoteRoutes: RouteObject[] = [
  {
    index: true,
    element: <React.Suspense fallback={<p>Loading...</p>}><ProductListPage /></React.Suspense>,
  },
  {
    path: ':id',
    element: <React.Suspense fallback={<p>Loading...</p>}><ProductDetailPage /></React.Suspense>,
  },
];
