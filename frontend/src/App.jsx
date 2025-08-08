import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد جميع الصفحات من مجلد routes
import Home from './routes/Home';
import Azkar from './routes/Azkar';
import Quran from './routes/Quran';
import Library from './routes/Library';
import Activities from './routes/Activities';
import Experiments from './routes/Experiments';
import Ocean from './routes/Ocean';
import Space from './routes/Space';
import Story from './routes/Story';
import Parents from './routes/Parents';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/azkar" element={<Azkar />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/library" element={<Library />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/ocean" element={<Ocean />} />
        <Route path="/space" element={<Space />} />
        <Route path="/story" element={<Story />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
