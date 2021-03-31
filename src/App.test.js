import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/Open Referral Logo/i);
  expect(imgElement).toBeInTheDocument();
});
