import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import IdentityDetailPage from '../IdentityDetailPage';

describe('IdentityDetailPage', () => {
  it('renders the heading', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<IdentityDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Identity Detail');
  });

  it('shows the id from URL params', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<IdentityDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Viewing identity ID: 42')).toBeInTheDocument();
  });
});
