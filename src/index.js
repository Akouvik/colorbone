import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from '../src/contexts/user.context';
import { CategoriesProvider } from '../src/contexts/categories.context';
import { CartProvider } from '../src/contexts/cart.context';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
