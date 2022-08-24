import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/SignUp/Signup'
import MainHeader from './components/MainHeader/MainHeader';
function App() {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(true);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    const emailData = localStorage.getItem('email');
    const passwordData = localStorage.getItem('password');
    if (emailData !== "") {
      if (passwordData !== "") {
        setLogin(true);
        setSignup(false);
        setLogout(false);
      }
    }
  }, [])

  const loginHandler = (emaildata, password) => {
    localStorage.setItem('email', emaildata);
    localStorage.setItem('password', password);
    setLogin(true);
    setSignup(false);
    setLogout(false);
  };

  const SignupHandler = () => {
    setLogin(false);
    setSignup(true);
    setLogout(false);

  }

  const logoutHandler = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLogin(false);
    setLogout(true);
    setSignup(false);
  };

  return (
    <React.Fragment>
      <MainHeader login={login} signup={signup} logout={logout}
        onLogout={logoutHandler} onSignup={SignupHandler}
      />
      <main>
        {!login && signup && !logout && <Signup onSignup={logoutHandler} />}
        {!login && !signup && logout && <Login onLogin={loginHandler} />}
        {login && !signup && !logout && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
