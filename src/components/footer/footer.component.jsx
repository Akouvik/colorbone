import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SectionNavigation from './section-navigation/section-navigation.component';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';

import './footer.styles.scss';

const Footer = () => {
  return (
    <Fragment>
      <section className="footer-section">
        <div className="footer-icons">
          <Link to="/">
            <Instagram className="social-media instagram" />
          </Link>
          <Link to="/">
            <Twitter className="social-media twitter" />
          </Link>
          <Link to="/">
            <LinkedIn className="social-media linkedin" />
          </Link>
          <Link to="/">
            <GitHub className="social-media github" />
          </Link>
        </div>
        <SectionNavigation />
      </section>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>Colorbone</span>
          </h3>

          <p className="footer-links">
            <Link className="nav-link" to="/">
              HOME
            </Link>

            <Link to="/shop">SHOP</Link>
            <Link to="/">ABOUT</Link>
            <Link to="#">CONTACT</Link>
          </p>
          <p className="footer-company-name">Colorbone.io© 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>144 N. Bedford Ave</span> Williamsberg Brooklyn, New York
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.646.926.6082‬</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <Link to="">support@colorbone.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Color your bone by finding comfort, pleasure, and warmth in your
            surrounding.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
