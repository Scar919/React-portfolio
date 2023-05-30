import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Navigation" element={<Navigation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
