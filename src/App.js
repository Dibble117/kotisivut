import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
//import Main from './Main';
import Footer from './Footer';
import Home from './Home';
import Kaivuutyot from './Kaivuutyot';
import Kivityot from './Kivityot';
import Rakennustyot from './Rakennustyot';
import Sahkotyot from './Sahkotyot';
//import Karuselli from './Karuselli';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kaivuutyot" element={<Kaivuutyot />} />
        <Route path="/kivityot" element={<Kivityot />} />
        <Route path="/rakennustyot" element={<Rakennustyot />} />
        <Route path="/sahkotyot" element={<Sahkotyot />} />
      </Routes>
      <Nav />
   {/*   <Main /> */}
   {/*   <Karuselli />  */}
      <Footer />
    </>
  );
}

export default App;

