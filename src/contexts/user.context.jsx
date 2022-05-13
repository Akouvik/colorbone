import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// this is the component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});
  const product = { currentProduct, setCurrentProduct };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    // unsubscribe whenever you unmount
    return unsubscribe;
  }, []);
  return (
    <UserContext.Provider value={value} product={product}>
      {children}
    </UserContext.Provider>
  );
};
