import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Square from './components/squares';
import Footer from './components/footer';


const App = () => (
  <div className="font-sans">
    <Header/>
    <Hero />
    <Square />
    <Footer />
  </div>
);

export default App;
