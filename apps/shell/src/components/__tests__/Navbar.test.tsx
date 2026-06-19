import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('renders 5 navigation links', () => {
    renderNavbar();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);
  });

  it('renders links with correct text', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Identity')).toBeInTheDocument();
    expect(screen.getByText('Customers')).toBeInTheDocument();
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('links point to correct paths', () => {
    renderNavbar();
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/home');
    expect(screen.getByText('Identity').closest('a')).toHaveAttribute('href', '/identity');
    expect(screen.getByText('Customers').closest('a')).toHaveAttribute('href', '/customers');
    expect(screen.getByText('Orders').closest('a')).toHaveAttribute('href', '/orders');
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
  });
});
