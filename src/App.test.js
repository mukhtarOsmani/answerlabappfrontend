import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Answer lab link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Answer lab/i);
  expect(linkElement).toBeInTheDocument();
});
