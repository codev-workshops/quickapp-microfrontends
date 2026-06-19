import React from 'react';
import { RouteObject } from 'react-router-dom';

const IdentityListPage = React.lazy(() => import('./pages/IdentityListPage'));
const IdentityDetailPage = React.lazy(() => import('./pages/IdentityDetailPage'));

export const remoteRoutes: RouteObject[] = [
  {
    index: true,
    element: <React.Suspense fallback={<p>Loading...</p>}><IdentityListPage /></React.Suspense>,
  },
  {
    path: ':id',
    element: <React.Suspense fallback={<p>Loading...</p>}><IdentityDetailPage /></React.Suspense>,
  },
];

export default remoteRoutes;
