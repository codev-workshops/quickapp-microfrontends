import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IdentityListPage from '../IdentityListPage';

describe('IdentityListPage', () => {
  it('renders the heading', () => {
    render(<MemoryRouter><IdentityListPage /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Identity List');
  });

  it('renders 2 sample items', () => {
    render(<MemoryRouter><IdentityListPage /></MemoryRouter>);
    expect(screen.getByText('Sample Identity 1')).toBeInTheDocument();
    expect(screen.getByText('Sample Identity 2')).toBeInTheDocument();
  });

  it('items are links with correct paths', () => {
    render(<MemoryRouter><IdentityListPage /></MemoryRouter>);
    const link1 = screen.getByText('Sample Identity 1');
    const link2 = screen.getByText('Sample Identity 2');
    expect(link1.closest('a')).toHaveAttribute('href', '/1');
    expect(link2.closest('a')).toHaveAttribute('href', '/2');
  });
});
