import { formatCurrency } from '../../utils';
const Product = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{formatCurrency(product.price)}</h3>
    </div>
  );
};

export default Product;
