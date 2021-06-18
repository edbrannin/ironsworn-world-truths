import { render, screen } from '@testing-library/react';
import App from './App';

test('Links to the Ironsworn website', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ironsworn World Workbook/i);
  expect(linkElement).toBeInTheDocument();
});
