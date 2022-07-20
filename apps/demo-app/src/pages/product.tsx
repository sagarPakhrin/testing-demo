import { useParams } from 'react-router-dom';
import { formatCurrency, products } from '../utils';
const Product = () => {
  const { id } = useParams();

  if (!id) {
    return <h1> 404</h1>;
  }

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h1> 404</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{formatCurrency(product.price)}</h3>
      <img src={product.image} alt="product" />
    </div>
  );
};

export default Product;
