import { Link } from 'react-router-dom';
import Product from '../components/product/product';
import { products } from '../utils';
const Products = () => {
  return (
    <div>
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          data-testid="product"
          key={product.id}
        >
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
