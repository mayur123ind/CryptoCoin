import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Coin from './components/Coin.jsx';
import Exchanges from './components/Exchanges.jsx';
import CoinDetails from './components/CoinDetails.jsx';
import Footer from './components/Footer.jsx';



const App = () => {
  return (
    <Router>
    <Header></Header>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/coin" element={<Coin/>}/>
        <Route path ="/exchanges" element={<Exchanges/>}/>
        <Route path ="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App