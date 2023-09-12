import PropTypes from "prop-types";
const Bookmark = ({ bookMark }) => {
  return (
    <div className="bg-slate-100 p-2 rounded-lg">
      <h2 className="text-2xl">{bookMark.title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};

export default Bookmark;
