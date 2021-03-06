import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const findCat = Object.keys(categoriesMap).find((currCategory) => {
      return currCategory.replace(/ /g, '') === category;
    });
    setCategoryName(findCat);
    setProducts(categoriesMap[findCat]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{categoryName.toUpperCase()}</h2>

      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
