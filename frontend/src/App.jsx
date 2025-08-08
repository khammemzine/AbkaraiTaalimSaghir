import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// استيراد الصفحات
import Home from './routes/Home';
import Azkar from './routes/Azkar';
import Quran from './routes/Quran';
import Library from './routes/Library';
import Activities from './routes/Activities';
import Experiments from './routes/Experiments';
import Parents from './routes/Parents';
import Ocean from './routes/Ocean';
import Space from './routes/Space';
import Story from './routes/Story';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>مرحبًا بكم في فضاء العبقري الصغير!</h1>

        {/* شريط التنقل */}
        <nav>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/azkar">الأذكار</Link></li>
            <li><Link to="/quran">قرآني</Link></li>
            <li><Link to="/library">مكتبتي</Link></li>
            <li><Link to="/activities">الأنشطة</Link></li>
            <li><Link to="/experiments">التجارب</Link></li>
            <li><Link to="/parents">ركن الآباء</Link></li>
            <li><Link to="/ocean">البحار والمحيطات</Link></li>
            <li><Link to="/space">الفضاء</Link></li>
            <li><Link to="/story">قصة وعبرة</Link></li>
            <li><Link to="/about">عن الموقع</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
        </nav>

        {/* التوجيهات */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/azkar" element={<Azkar />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/library" element={<Library />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/ocean" element={<Ocean />} />
          <Route path="/space" element={<Space />} />
          <Route path="/story" element={<Story />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
