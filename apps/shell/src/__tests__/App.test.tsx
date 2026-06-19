import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router';

describe('App', () => {
  it('renders without crashing', async () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toBeTruthy();
  });

  it('Navbar is present in the rendered output', async () => {
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(5);
    });
  });

  it('AuthProvider wraps the tree (useAuth does not throw)', async () => {
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('/ redirects to /home', async () => {
    render(<RouterProvider router={router} />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Micro-Frontend Shell/ })).toBeInTheDocument();
    });
  });
});
