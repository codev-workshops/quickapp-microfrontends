import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CustomerListPage from '../CustomerListPage';

describe('CustomerListPage', () => {
  it('renders the heading', () => {
    render(<MemoryRouter><CustomerListPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Customer List');
  });

  it('renders 2 sample items', () => {
    render(<MemoryRouter><CustomerListPage /></MemoryRouter>);
    expect(screen.getByText('Sample Customer 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Customer 2')).toBeInTheDocument();
  });

  it('items are links with correct paths', () => {
    render(<MemoryRouter><CustomerListPage /></MemoryRouter>);
    const link1 = screen.getByText('Sample Customer 1');
    const link2 = screen.getByText('Sample Customer 2');
    expect(link1.closest('a')).toHaveAttribute('href', '/1');
    expect(link2.closest('a')).toHaveAttribute('href', '/2');
  });
});
