
import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import PhotoPage from '../PhotoPage/PhotoPage';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
        <PhotoPage />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
