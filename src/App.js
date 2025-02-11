import './App.css';
import React from 'react';
import Header from './Header';
//import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Karuselli from './Karuselli';
//import BookingPage from './BookingPage';

function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Main />
      <Karuselli/>
      {/*<BookingPage />*/}
      <Footer />
    </>
  );
}

export default App;

