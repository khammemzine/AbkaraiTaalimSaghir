// frontend/src/App.jsx

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

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
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">فضاء العبقري الصغير</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">الرئيسية</NavLink>
              <NavLink className="nav-link" to="/ocean">البحار والمحيطات</NavLink>
              <NavLink className="nav-link" to="/quran">قرآني</NavLink>
              <NavLink className="nav-link" to="/azkar">الأذكار</NavLink>
              <NavLink className="nav-link" to="/library">مكتبتي</NavLink>
              <NavLink className="nav-link" to="/activities">الأنشطة</NavLink>
              <NavLink className="nav-link" to="/experiments">التجارب</NavLink>
              <NavLink className="nav-link" to="/parents">ركن الآباء</NavLink>
              <NavLink className="nav-link" to="/about">عن الموقع</NavLink>
              <NavLink className="nav-link" to="/contact">اتصل بنا</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main content */}
      <Container>
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
      </Container>

      {/* Footer */}
      <footer className="text-center mt-4 py-3 bg-light">
        <p className="mb-0">© {new Date().getFullYear()} فضاء العبقري الصغير - جميع الحقوق محفوظة</p>
      </footer>
    </>
  );
}

export default App;
