import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CustomerDetailPage from '../CustomerDetailPage';

describe('CustomerDetailPage', () => {
  it('renders the heading', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<CustomerDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Customer Detail');
  });

  it('shows the id from URL params', () => {
    render(
      <MemoryRouter initialEntries={['/42']}>
        <Routes>
          <Route path=":id" element={<CustomerDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Viewing customer ID: 42')).toBeInTheDocument();
  });
});
