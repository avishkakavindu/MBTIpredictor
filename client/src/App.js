import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
