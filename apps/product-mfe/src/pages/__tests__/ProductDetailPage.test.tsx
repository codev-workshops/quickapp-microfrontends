import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from '../ProductDetailPage';

describe('ProductDetailPage', () => {
  it('renders the heading', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Product Detail');
  });

  it('shows the id from URL params', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<ProductDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Viewing product ID: 42')).toBeInTheDocument();
  });
});
