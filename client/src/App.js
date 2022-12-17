import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import { getCurrentUser } from './services/auth.service';

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // on load check isAuthenticated
  useEffect(() => {
    if (localStorage.getItem('user')) {
      getCurrentUser().then(
        (response) => {
          setIsAuthenticated(true);
          setUser(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [isAuthenticated]);

  return (
    <div className='App'>
      <Header
        setIsSignIn={setIsSignIn}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        user={user}
      />
      <Banner />
      <Main
        isSignIn={isSignIn}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Footer />
    </div>
  );
}

export default App;
