import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="w-1/3 ">
      <div className="mb-5 text-2xl p-6 rounded-lg text-blue-600 font-medium border-solid border border-blue-600 bg-blue-100">
        <h1>Spent time on read : {readingTime} min</h1>
      </div>
      <div className="bg-slate-200 p-6 rounded-lg">
        <h1 className="text-2xl mb-6">Book marks list: {bookMarks.length}</h1>
        <div className="space-y-4">
          {bookMarks.map((bookMark, idx) => (
            <Bookmark key={idx} bookMark={bookMark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.object.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
