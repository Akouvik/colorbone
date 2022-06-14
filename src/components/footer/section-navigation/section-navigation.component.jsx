import SHOP_DATA from '../../../shop-data';
import { Link, useNavigate } from 'react-router-dom';
import './section-navigation.styles.scss';

const SectionNavigation = () => {
  const navigate = useNavigate();

  const navigateToSection = ({ title }) => {
    const endPoint = title.replace(/ /g, '').toLocaleLowerCase();
    navigate(`/shop/${endPoint}`);
  };
  return (
    <div className="float">
      <ul className="section-navigation-ul">
        {SHOP_DATA.map(({ title }) => {
          if (title === 'Healing Crystals') {
            title = 'Home Decor';
          }
          return (
            <li
              className="section-navigation-list"
              onClick={() => navigateToSection({ title })}
              key={title}
            >
              <Link to="">{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionNavigation;
