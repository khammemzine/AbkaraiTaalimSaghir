// frontend/src/routes/Space.jsx

import React from "react";

const Space = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">ركن الفضاء</h1>
      <p className="mb-4">
        مرحبًا بكم في عالم الفضاء المدهش! في هذا الركن، نكتشف الكواكب، النجوم، والمجرات من خلال معلومات مبسطة ومسلية.
      </p>
      <ul className="list-disc list-inside text-right max-w-xl mx-auto">
        <li>تعلم أسماء الكواكب ومواقعها.</li>
        <li>معلومات مشوقة عن القمر والشمس.</li>
        <li>صور وحقائق عن الفضاء بطريقة ممتعة.</li>
      </ul>
    </div>
  );
};

export default Space;
