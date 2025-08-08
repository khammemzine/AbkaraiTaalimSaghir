import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const sections = [
    { to: "/quran", label: "📖 قرآني" },
    { to: "/azkar", label: "🕋 الأذكار" },
    { to: "/story", label: "📚 قصة وعبرة" },
    { to: "/space", label: "🚀 الفضاء" },
    { to: "/ocean", label: "🌊 البحار والمحيطات" },
    { to: "/library", label: "📘 مكتبتي", restricted: true },
    { to: "/activities", label: "🎮 الأنشطة", restricted: true },
    { to: "/experiments", label: "🔬 التجارب", restricted: true },
    { to: "/parents", label: "👨‍👩‍👧‍👦 ركن الآباء" },
    { to: "/about", label: "ℹ️ عن الموقع" },
    { to: "/contact", label: "📞 اتصل بنا" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">فضاء العبقري الصغير</h1>
        <p className="text-lg text-gray-700">
          اكتشف، تعلم، واستمتع في عالمنا التعليمي الممتع!
        </p>
      </header>

      <main className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.to}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200 hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
          >
            <span className="block text-xl font-semibold text-blue-800 mb-2">
              {section.label}
            </span>
            {section.restricted && (
              <p className="text-xs text-red-500">(للمشتركين فقط)</p>
            )}
          </Link>
        ))}
      </main>
    </div>
  );
}
