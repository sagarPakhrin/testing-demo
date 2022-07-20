import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Product from '../pages/product';
import Products from '../pages/products';

export function Ecom() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Ecom;
