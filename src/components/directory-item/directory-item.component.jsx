import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useNavigate } from 'react-router-dom';
import CategoryPreview from '../category-preview/category-preview.component';
import './directory-item.styles.scss';

const DirectoryItem = ({ category, categoryProducts }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  const { categoriesMap } = useContext(CategoriesContext);
  const [directoryPreview, setDirectoryPreview] = useState([]);
  const driedFlorals = categoriesMap['dried florals'];

  return (
    <Fragment>
      <div className="directory-item-container" onClick={onNavigateHandler}>
        {title == 'Dried Florals' && (
          <p>Build An Image Slider With React Hooks</p>
        )}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {title == 'Home Decor' && <p>Build An Image Slider With React Hooks</p>}
        <div className="body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </Fragment>
  );
};
export default DirectoryItem;
