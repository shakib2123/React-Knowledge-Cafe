import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMark, handleAddReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div className="w-3/4 space-y-10">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMark={handleAddToBookMark}
          handleAddReadingTime={handleAddReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func,
  handleAddReadingTime: PropTypes.func,
};

export default Blogs;
