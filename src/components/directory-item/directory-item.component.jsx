import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useNavigate } from 'react-router-dom';
import CategoryPreview from '../category-preview/category-preview.component';
import HerbsAndTeaComponent from './herbs-and-tea.component';
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
      <div className="image-one">
        <div className="caption">
          <span>First heading</span>
        </div>
      </div>
      <div className="directory-item-container" onClick={onNavigateHandler}>
        {title === 'Dried Florals' && (
          <p>Shop Our curated selection of aromatic Dried Florals</p>
        )}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {title === 'Healing Crystals' && (
          <p>
            Much Like the body and mind, the soul requires constant recharge
          </p>
        )}
        <div className="body">
          {title === 'Herbs and Tea' ? (
            <HerbsAndTeaComponent />
          ) : (
            <>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default DirectoryItem;
