import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders the heading', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', {
        name: /Decomposed Application \u2014 Micro-Frontend Shell/,
      }),
    ).toBeInTheDocument();
  });

  it('renders both description paragraphs', () => {
    render(<HomePage />);
    expect(
      screen.getByText(
        'This is the host shell for the decomposed Angular micro-frontends.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Each feature module .* is loaded as an independent remote application via Webpack Module Federation\./,
      ),
    ).toBeInTheDocument();
  });

  it('does not crash on render', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
