import { render, screen } from '@testing-library/react';
import Connection from '../index';

describe('<Connection />', () => {
  it('should display a text', () => {
    render(<Connection />);
    expect(screen.getByText(/Page de connexion/)).toBeInTheDocument();
  });
});
