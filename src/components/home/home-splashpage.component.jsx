import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './home-splashpage.styles.scss';

const SplashPage = () => {
  const navigate = useNavigate();
  const goToShop = () => navigate('/shop');
  return (
    <Fragment>
      <div className="big-image">
        <div className="overlay">
          <h1>Hero Image With Overlay</h1>
          <span>A full width background image built with HTML & CSS.</span>
          <Button onClick={goToShop}>SHOP NOW</Button>
        </div>
      </div>

      <div id="vids">
        <h3>
          Build An Image Slider With React Hooks Code A Thumbnail Gallery With
          React mage Slider With React Hooks Code A Thumbnail Gallery With React
        </h3>
        <Link to="#">
          <p>
            Find out More
            <ArrowForwardIcon className="arrow"></ArrowForwardIcon>
          </p>
        </Link>
      </div>
    </Fragment>
  );
};

export default SplashPage;
