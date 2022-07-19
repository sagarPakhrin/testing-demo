import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './counter';

describe('Counter', () => {
  it('should render properly', () => {
    const { getByText } = render(<Counter />);
    const counter = getByText('0');
    expect(counter).toBeInTheDocument();
  });

  it('should increase, and decrease count when + is clicked', async () => {
    render(<Counter />);
    const addBtn = screen.getByText('+');
    const subBtn = screen.getByText('-');
    userEvent.click(addBtn);
    const counter = await screen.findByText('1');
    expect(counter).toHaveTextContent('1');
    userEvent.click(subBtn);
  });
});
