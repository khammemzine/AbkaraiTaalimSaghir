import React from 'react';

const Azkar = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">الأذكار</h1>
      <div className="card p-4 shadow-sm">
        <h5>أذكار الصباح</h5>
        <ul>
          <li>أصبحنا وأصبح الملك لله، والحمد لله...</li>
          <li>اللهم بك أصبحنا وبك أمسينا...</li>
          <li>لا إله إلا الله وحده لا شريك له...</li>
        </ul>

        <h5 className="mt-4">أذكار المساء</h5>
        <ul>
          <li>أمسينا وأمسى الملك لله، والحمد لله...</li>
          <li>اللهم بك أمسينا وبك أصبحنا...</li>
          <li>سبحان الله وبحمده عدد خلقه...</li>
        </ul>
      </div>
    </div>
  );
};

export default Azkar;
