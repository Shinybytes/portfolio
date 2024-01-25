import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Loader from './components/Loader';
import About from './components/About';
import Kontakt from './components/Kontakt';


function App() {

  return (
    <div>
      <Router>
        <Loader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
