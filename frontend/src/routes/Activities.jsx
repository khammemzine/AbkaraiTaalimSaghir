import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">فضاء النشاطات</h1>
      <p className="text-center mb-6">مرحبًا بك في فضاء النشاطات، هذه الألعاب مخصصة للمشتركين فقط.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-2xl shadow p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">لعبة المطابقة</h2>
          <p className="mb-4">اختبر ذاكرتك وقم بمطابقة البطاقات المتشابهة!</p>
          <Link to="/games/matching" className="text-blue-600 hover:underline">ابدأ اللعبة</Link>
        </div>

        <div className="border rounded-2xl shadow p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">لعبة الأسئلة</h2>
          <p className="mb-4">اختبر معلوماتك بالإجابة على الأسئلة الممتعة!</p>
          <Link to="/games/quiz" className="text-blue-600 hover:underline">ابدأ اللعبة</Link>
        </div>

        <div className="border rounded-2xl shadow p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">لعبة التلوين</h2>
          <p className="mb-4">استمتع بتلوين الصور بألوانك المفضلة!</p>
          <Link to="/games/coloring" className="text-blue-600 hover:underline">ابدأ اللعبة</Link>
        </div>
      </div>
    </div>
  );
};

export default Activities;
