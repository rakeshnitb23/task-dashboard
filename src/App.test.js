import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task dashboard header', () => {
  render(<App />);
  expect(screen.getByText(/Task Flow/i)).toBeInTheDocument();
  expect(screen.getByText(/Task Board/i)).toBeInTheDocument();
});
