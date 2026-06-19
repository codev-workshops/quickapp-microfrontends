import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductListPage from '../ProductListPage';

describe('ProductListPage', () => {
  it('renders the heading', () => {
    render(<MemoryRouter><ProductListPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Product List');
  });

  it('renders 2 sample items', () => {
    render(<MemoryRouter><ProductListPage /></MemoryRouter>);
    expect(screen.getByText('Sample Product 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Product 2')).toBeInTheDocument();
  });

  it('items are links with correct paths', () => {
    render(<MemoryRouter><ProductListPage /></MemoryRouter>);
    const link1 = screen.getByText('Sample Product 1');
    const link2 = screen.getByText('Sample Product 2');
    expect(link1.closest('a')).toHaveAttribute('href', '/1');
    expect(link2.closest('a')).toHaveAttribute('href', '/2');
  });
});
