import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Square from './components/squares';
import Footer from './components/footer';
import Shop from './components/shop';


const App = () => (
  <div className="font-sans">
    <Header/>
    <Shop />
    <Footer />
  </div>
);

export default App;
