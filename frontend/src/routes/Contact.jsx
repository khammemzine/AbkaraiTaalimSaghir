import React from "react";

const Contact = () => {
  return (
    <div className="container py-4">
      <h1 className="text-2xl font-bold mb-4">اتصل بنا</h1>
      <p>نحن سعداء بتواصلكم معنا. يمكنكم إرسال ملاحظاتكم أو استفساراتكم عبر النموذج التالي:</p>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-2 border rounded"
        />
        <textarea
          rows="5"
          placeholder="رسالتك"
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          إرسال
        </button>
      </form>
    </div>
  );
};

export default Contact;
