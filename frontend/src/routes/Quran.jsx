import React from "react";

const Quran = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">قرآني</h1>
      <p className="text-lg">
        يحتوي هذا الركن على سور قصيرة من القرآن الكريم، ليستمع الأطفال ويتعلموا تلاوتها.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">سورة الفلق</h2>
          <audio controls className="w-full">
            <source src="/public/audio/alfalaq.mp3" type="audio/mpeg" />
            المتصفح لا يدعم مشغل الصوت.
          </audio>
        </div>

        <div className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">سورة القارعة</h2>
          <audio controls className="w-full">
            <source src="/public/audio/alqaria.mp3" type="audio/mpeg" />
            المتصفح لا يدعم مشغل الصوت.
          </audio>
        </div>

        <div className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">سورة الناس</h2>
          <audio controls className="w-full">
            <source src="/public/audio/annas.mp3" type="audio/mpeg" />
            المتصفح لا يدعم مشغل الصوت.
          </audio>
        </div>

      </div>
    </div>
  );
};

export default Quran;
