import { Link } from 'react-router-dom';

import ProductCardContainer from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title.replace(/ /g, '')}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardContainer key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
