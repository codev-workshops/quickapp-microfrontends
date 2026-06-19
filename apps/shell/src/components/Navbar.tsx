import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
  background: '#1976d2',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
};

const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyle}>
      <Link to="/home" style={linkStyle}>Home</Link>
      <Link to="/identity" style={linkStyle}>Identity</Link>
      <Link to="/customers" style={linkStyle}>Customers</Link>
      <Link to="/orders" style={linkStyle}>Orders</Link>
      <Link to="/products" style={linkStyle}>Products</Link>
    </nav>
  );
};

export default Navbar;
