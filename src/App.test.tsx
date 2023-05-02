import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders React Template text', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Template/i);
  expect(linkElement).toBeInTheDocument();
});
