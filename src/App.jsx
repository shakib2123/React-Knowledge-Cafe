import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };
  const handleAddReadingTime = (id, reading_time) => {
    setReadingTime(readingTime + reading_time);
    const remaining = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(remaining);
  };
  return (
    <>
      <Header></Header>
      <main className="container mx-auto md:flex">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blogs>
        <Bookmarks
          key={bookMarks.id}
          bookMarks={bookMarks}
          readingTime={readingTime}
        ></Bookmarks>
      </main>
    </>
  );
}

export default App;
