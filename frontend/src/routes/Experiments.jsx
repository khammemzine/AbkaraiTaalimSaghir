import React from 'react';
import { Link } from 'react-router-dom';

export default function Experiments() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">فضاء التجارب</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* تجربة البركان */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-red-600">تجربة البركان</h2>
          <p className="mb-4">
            تجربة ممتعة تحاكي ثوران البركان باستخدام الخل وبيكربونات الصودا.
          </p>
          <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
            <span className="text-gray-500">هنا يمكن وضع فيديو توضيحي أو رسم متحرك</span>
          </div>
          <ul className="list-disc list-inside mb-2">
            <li>كوب زجاجي</li>
            <li>خل</li>
            <li>بيكربونات الصوديوم</li>
            <li>ملون طعام أحمر (اختياري)</li>
          </ul>
        </div>

        {/* تجربة البالون */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">تجربة نفخ البالون</h2>
          <p className="mb-4">
            تجربة تبين كيفية توليد غاز يدفع البالون للانتفاخ دون نفخ مباشر.
          </p>
          <div className="aspect-video bg-gray-200 rounded mb-4 flex items-center justify-center">
            <span className="text-gray-500">هنا يمكن وضع فيديو توضيحي أو رسم متحرك</span>
          </div>
          <ul className="list-disc list-inside mb-2">
            <li>زجاجة بلاستيكية</li>
            <li>خل</li>
            <li>بيكربونات الصوديوم</li>
            <li>بالون</li>
            <li>ملعقة صغيرة وقمع</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-600 hover:underline">العودة إلى الصفحة الرئيسية</Link>
      </div>
    </div>
  );
}
