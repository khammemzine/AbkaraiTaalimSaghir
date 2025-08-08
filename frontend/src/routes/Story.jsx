import React from "react";

const Story = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">قصة وعبرة</h1>
      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">قصة النملة المجتهدة</h2>
        <p className="mb-4 leading-relaxed">
          في فصل الصيف، كانت النملة تعمل بجد وتجمع الطعام بينما كانت
          الصرصور يلهو ويلعب. وعندما جاء الشتاء، لم يجد الصرصور ما يأكله،
          بينما كانت النملة تعيش دافئة بطعامها. فطلب المساعدة منها، فقالت له:
          "اجتهد في وقت العمل لتستريح وقت الحاجة".
        </p>
        <p className="font-bold">العبرة: العمل والاجتهاد في الوقت المناسب هما سر النجاح.</p>
      </div>
    </div>
  );
};

export default Story;
