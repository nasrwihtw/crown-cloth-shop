import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils/firebase.utils";

export const Usercontext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Usercontext.Provider value={value}> {children} </Usercontext.Provider>
  );
};
