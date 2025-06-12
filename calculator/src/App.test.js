import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Basic Calculator heading', () => {
  render(<App />);
  const heading = screen.getByText(/Basic Calculator/i);
  expect(heading).toBeInTheDocument();
});

test('renders Interest Calculator heading', () => {
  render(<App />);
  const heading = screen.getByText(/Interest Calculator/i);
  expect(heading).toBeInTheDocument();
});

test('renders Home Loan EMI option', () => {
  render(<App />);
  const option = screen.getByRole('option', { name: /Home Loan EMI/i });
  expect(option).toBeInTheDocument();
});
