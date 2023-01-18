import { render, screen } from '@testing-library/react';
import DellReact from './DellReact';

test('renders learn react link', () => {
  render(<DellReact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
