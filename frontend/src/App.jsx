// frontend/src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Ocean from './routes/Ocean';
import Quran from './routes/Quran';
import Azkar from './routes/Azkar';
import Library from './routes/Library';
import Activities from './routes/Activities';
import Experiments from './routes/Experiments';
import Parents from './routes/Parents';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ocean" element={<Ocean />} />
      <Route path="/quran" element={<Quran />} />
      <Route path="/azkar" element={<Azkar />} />
      <Route path="/library" element={<Library />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/experiments" element={<Experiments />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
