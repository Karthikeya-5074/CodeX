import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calculator heading', () => {
  render(<App />);
  const heading = screen.getByText(/Calculator/i);
  expect(heading).toBeInTheDocument();
});

test('renders Interest Calculator heading', () => {
  render(<App />);
  const heading = screen.getByText(/Interest Calculator/i);
  expect(heading).toBeInTheDocument();
});
