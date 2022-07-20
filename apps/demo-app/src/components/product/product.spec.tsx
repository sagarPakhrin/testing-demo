import { render, screen } from '@testing-library/react';
import Product from './product';
describe('Product', () => {
  const product = {
    id: 1,
    title: 'Bag',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  };
  it('should render correctly', () => {
    render(<Product product={product} />);
    expect(screen.getByText('Bag')).toBeInTheDocument();
    expect(screen.getByText('$109.95')).toBeInTheDocument();
  });
});
