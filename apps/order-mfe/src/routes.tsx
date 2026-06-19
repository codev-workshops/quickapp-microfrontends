import React from 'react';
import { RouteObject } from 'react-router-dom';

const OrderListPage = React.lazy(() => import('./pages/OrderListPage'));
const OrderDetailPage = React.lazy(() => import('./pages/OrderDetailPage'));

export const remoteRoutes: RouteObject[] = [
  {
    index: true,
    element: <React.Suspense fallback={<p>Loading...</p>}><OrderListPage /></React.Suspense>,
  },
  {
    path: ':id',
    element: <React.Suspense fallback={<p>Loading...</p>}><OrderDetailPage /></React.Suspense>,
  },
];

export default remoteRoutes;
