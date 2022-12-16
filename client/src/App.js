import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='App'>
      <Header setIsSignIn={setIsSignIn} isAuthenticated={isAuthenticated} />
      <Banner />
      <Main isSignIn={isSignIn} isAuthenticated={isAuthenticated} />
      <Footer />
    </div>
  );
}

export default App;
