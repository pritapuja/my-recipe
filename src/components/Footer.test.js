import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer'; 

test('renders footer text', () => {
  render(<Footer />);
  
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
});

test('renders Facebook link with correct URL', () => {
  render(<Footer />);
  
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
});

test('renders X link with correct URL', () => {
  render(<Footer />);
  
  const xLink = screen.getByTestId('link-x');
  expect(xLink).toHaveAttribute('href', 'https://x.com');
});

test('renders Instagram link with correct URL', () => {
  render(<Footer />);
  
  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
