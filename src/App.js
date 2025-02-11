import './App.css';
import React from 'react';
import Header from './Header';
import Nav from './Nav';
//import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import Karuselli from './Karuselli';

function App() {
  return (
    <>
      <Header />
      <Nav />
   {/*   <Main /> */}
      <BookingPage />
      <Karuselli />
      <Footer />
    </>
  );
}

export default App;

