import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <NavLink to="/" style={{ margin: '0 10px' }}>الرئيسية</NavLink>
      <NavLink to="/library" style={{ margin: '0 10px' }}>مكتبتي</NavLink>
      <NavLink to="/activities" style={{ margin: '0 10px' }}>أنشطة</NavLink>
      <NavLink to="/experiments" style={{ margin: '0 10px' }}>تجارب</NavLink>
      <NavLink to="/quran" style={{ margin: '0 10px' }}>قرآني</NavLink>
      <NavLink to="/azkar" style={{ margin: '0 10px' }}>أذكاري</NavLink>
      <NavLink to="/ocean" style={{ margin: '0 10px' }}>المحيطات</NavLink>
      <NavLink to="/parents" style={{ margin: '0 10px' }}>ركن الآباء</NavLink>
      <NavLink to="/about" style={{ margin: '0 10px' }}>حول</NavLink>
      <NavLink to="/contact" style={{ margin: '0 10px' }}>اتصل بنا</NavLink>
    </nav>
  );
}

export default Navbar;
