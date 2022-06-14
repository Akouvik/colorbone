import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import SplashPage from '../../components/home/home-splashpage.component';
import Footer from '../../components/footer/footer.component';
const Home = () => {
  return (
    <div>
      <SplashPage />
      <Directory />;
    </div>
  );
};

export default Home;
