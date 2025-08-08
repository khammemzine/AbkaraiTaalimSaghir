import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // تحقق من حالة الدخول (بشكل بسيط)
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const books = [
    {
      title: "الصوت و الضوء",
      file: "/books/book1.pdf",
    },
    {
      title: "القوى و الحركة",
      file: "/books/book2.pdf",
    },
    
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">مكتبتي</h1>
      <p className="mb-4">هذه الكتب مخصصة للمشتركين، يمكنك تصفحها دون تحميل.</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, index) => (
          <div
            key={index}
            className="border rounded-xl shadow p-4 bg-white hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
            <iframe
              src={book.file}
              width="100%"
              height="300px"
              title={book.title}
              className="rounded border"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
