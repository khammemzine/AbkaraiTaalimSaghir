import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
import NotFound from './routes/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
