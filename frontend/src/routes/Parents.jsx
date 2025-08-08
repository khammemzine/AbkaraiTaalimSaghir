import React from "react";

const Parents = () => {
  return (
    <div className="container py-4">
      <h1 className="text-2xl font-bold mb-4">ركن الآباء</h1>
      <p>
        مرحبًا بكم في ركن الآباء! هنا تجدون نصائح ومقالات لمساعدتكم على
        متابعة رحلة أطفالكم التعليمية، واقتراحات لتعزيز التعلم في المنزل.
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>كيفية دعم تعلم طفلك في المنزل</li>
        <li>أفضل الممارسات لتشجيع القراءة</li>
        <li>تنمية المهارات الحياتية من خلال الأنشطة</li>
      </ul>
    </div>
  );
};

export default Parents;
