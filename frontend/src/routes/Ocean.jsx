// frontend/src/routes/Ocean.jsx

import React from "react";

const Ocean = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">البحار والمحيطات</h1>
      <p className="mb-4">
        مرحبًا بك في ركن البحار والمحيطات! استكشف معنا أعماق البحار وتعرف على المخلوقات البحرية المدهشة.
      </p>
      <ul className="list-disc list-inside text-right max-w-xl mx-auto">
        <li>تعلم عن الأسماك والشعاب المرجانية.</li>
        <li>شاهد فيديوهات ممتعة عن الحيتان والدلافين.</li>
        <li>اختبر معلوماتك بمسابقات بحرية.</li>
      </ul>
    </div>
  );
};

export default Ocean;
