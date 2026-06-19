import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OrderListPage from '../OrderListPage';

describe('OrderListPage', () => {
  it('renders the heading', () => {
    render(<MemoryRouter><OrderListPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Order List');
  });

  it('renders 2 sample items', () => {
    render(<MemoryRouter><OrderListPage /></MemoryRouter>);
    expect(screen.getByText('Sample Order 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Order 2')).toBeInTheDocument();
  });

  it('items are links with correct paths', () => {
    render(<MemoryRouter><OrderListPage /></MemoryRouter>);
    const link1 = screen.getByText('Sample Order 1');
    const link2 = screen.getByText('Sample Order 2');
    expect(link1.closest('a')).toHaveAttribute('href', '/1');
    expect(link2.closest('a')).toHaveAttribute('href', '/2');
  });
});
