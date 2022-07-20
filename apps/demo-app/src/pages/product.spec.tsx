import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Product from './product';
describe('Product', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']} initialIndex={0}>
        <Routes>
          <Route path="products/:id" element={<Product />} />
        </Routes>
      </MemoryRouter>
    );
    expect(
      screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    ).toBeInTheDocument();

    expect(screen.getByText('USD 109.95')).toBeInTheDocument();
  });
});
