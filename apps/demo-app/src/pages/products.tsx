import { Link } from 'react-router-dom';
import { formatCurrency, products } from '../utils';
const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          data-testid="product-link"
        >
          <div>
            <h1>{product.title}</h1>
            <h3>{formatCurrency(product.price)}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
