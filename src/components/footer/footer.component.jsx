import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
  return (
    <Fragment>
      <section>Footer Example 4</section>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>
            Colorbone<span>logo</span>
          </h3>

          <p className="footer-links">
            <Link className="nav-link" to="/">
              HOME
            </Link>

            <Link to="/shop">SHOP</Link>

            <Link to="/home">ABOUT</Link>

            <Link to="/home">FAQ</Link>

            <Link to="/home">CONTACT</Link>
          </p>
          <p className="footer-company-name">Colorbone.io© 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <Link to="">support@company.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <Link to="/">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
