import React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { AuthProvider } from './shared/auth/AuthContext';
import Navbar from './components/Navbar';

const HomePage = React.lazy(() => import('./pages/HomePage'));

const RemoteRoutesRenderer: React.FC<{ routes: RouteObject[] }> = ({ routes }) => {
  const element = useRoutes(routes);
  return <React.Suspense fallback={<p>Loading...</p>}>{element}</React.Suspense>;
};

const RootLayout: React.FC = () => (
  <AuthProvider>
    <Navbar />
    <main style={{ padding: '1rem' }}>
      <Outlet />
    </main>
  </AuthProvider>
);

const RemoteErrorBoundary: React.FC<{ remoteName: string; error: unknown }> = ({ remoteName, error }) => (
  <p>Error loading {remoteName}: {error instanceof Error ? error.message : String(error)}</p>
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: (
          <React.Suspense fallback={<p>Loading...</p>}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: '/identity/*',
        lazy: async () => {
          try {
            const { remoteRoutes } = await import('identityMfe/routes');
            return { Component: () => <RemoteRoutesRenderer routes={remoteRoutes} /> };
          } catch (e) {
            return { Component: () => <RemoteErrorBoundary remoteName="identityMfe" error={e} /> };
          }
        },
      },
      {
        path: '/customers/*',
        lazy: async () => {
          try {
            const { remoteRoutes } = await import('customerMfe/routes');
            return { Component: () => <RemoteRoutesRenderer routes={remoteRoutes} /> };
          } catch (e) {
            return { Component: () => <RemoteErrorBoundary remoteName="customerMfe" error={e} /> };
          }
        },
      },
      {
        path: '/orders/*',
        lazy: async () => {
          try {
            const { remoteRoutes } = await import('orderMfe/routes');
            return { Component: () => <RemoteRoutesRenderer routes={remoteRoutes} /> };
          } catch (e) {
            return { Component: () => <RemoteErrorBoundary remoteName="orderMfe" error={e} /> };
          }
        },
      },
      {
        path: '/products/*',
        lazy: async () => {
          try {
            const { remoteRoutes } = await import('productMfe/routes');
            return { Component: () => <RemoteRoutesRenderer routes={remoteRoutes} /> };
          } catch (e) {
            return { Component: () => <RemoteErrorBoundary remoteName="productMfe" error={e} /> };
          }
        },
      },
    ],
  },
]);
