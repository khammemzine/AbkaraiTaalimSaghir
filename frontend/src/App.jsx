// frontend/src/App.jsx

import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Suspense fallback={<div>جارٍ التحميل...</div>}>
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
            <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - الصفحة غير موجودة</h2>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
