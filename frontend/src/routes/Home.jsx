import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">فضاء العبقري الصغير</h1>
        <p className="text-lg text-gray-700">اكتشف، تعلم، واستمتع في عالمنا التعليمي الممتع!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Link to="/quran" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          📖 قرآني
        </Link>
        <Link to="/azkar" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          🕋 الأذكار
        </Link>
        <Link to="/story" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          📚 قصة وعبرة
        </Link>
        <Link to="/space" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          🚀 الفضاء
        </Link>
        <Link to="/ocean" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          🌊 البحار والمحيطات
        </Link>
        <Link to="/library" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          📘 مكتبتي (للمشتركين)
        </Link>
        <Link to="/activities" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          🎮 الأنشطة (للمشتركين)
        </Link>
        <Link to="/experiments" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          🔬 التجارب (للمشتركين)
        </Link>
        <Link to="/parents" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          👨‍👩‍👧‍👦 ركن الآباء
        </Link>
        <Link to="/about" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          ℹ️ عن الموقع
        </Link>
        <Link to="/contact" className="bg-white shadow-md rounded-xl p-6 text-center hover:bg-blue-50">
          📞 اتصل بنا
        </Link>
      </div>
    </div>
  );
}
