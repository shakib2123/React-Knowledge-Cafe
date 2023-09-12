import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookMark, handleAddReadingTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="max-w-3xl space-y-4">
      <img className="w-full rounded " src={cover} alt="" />
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h1 className="font-semibold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>

        <p className="flex items-center">
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </p>
      </div>

      <p className="space-x-4">
        {hashtags.map((tag, idx) => (
          <a key={idx} href="">
            <span>#{tag}</span>
          </a>
        ))}
      </p>
      <button
        onClick={() => handleAddReadingTime(id, reading_time)}
        className="text-lg font-bold text-blue-800 underline"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func,
  handleAddReadingTime: PropTypes.func,
};
export default Blog;
