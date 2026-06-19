import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import OrderDetailPage from '../OrderDetailPage';

describe('OrderDetailPage', () => {
  it('renders the heading', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<OrderDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Order Detail');
  });

  it('shows the id from URL params', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<OrderDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Viewing order ID: 42')).toBeInTheDocument();
  });
});
