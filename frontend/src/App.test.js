import { render, screen } from '@testing-library/react';
import SkyR from './App';

test('renders learn react link', () => {
  render(<SkyReact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
