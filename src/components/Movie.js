import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({id, coverImg, title, summary, genres}) => {
  return (
    <div>
      <img src={coverImg} alt="cover img"/>
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        <li>
          {genres.map((g, idx) => <div key={idx}>{g}</div>)}
        </li>
      </ul>
    </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
