import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { }, // just a tip so the IDE can autocomplete the name of this function
  onLogin: (email, password) => { } // just a tip so the IDE can autocomplete the name of this function
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (storedUserLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, [storedUserLoggedIn]);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }

  return <AuthContext.Provider value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler
  }}>
    {props.children}
  </AuthContext.Provider >
}

export default AuthContext;