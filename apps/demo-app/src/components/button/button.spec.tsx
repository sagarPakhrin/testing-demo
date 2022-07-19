import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button';

describe('Button', () => {
  const onClick = jest.fn();
  it('should render', async () => {
    render(<Button onClick={onClick} label="+" />);
    userEvent.click(screen.getByText('+'));
    await waitFor(() => expect(onClick).toHaveBeenCalled());
  });
});
