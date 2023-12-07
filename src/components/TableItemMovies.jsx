import PropTypes from "prop-types";

export const TableItemMovies = ({ title, length, rating, genres, awards }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{length}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {
            genres.length ?
          genres.map((genre, id) => (
            <li key={id}>{genre}</li>
          ))
          :
          <p>SIN ESPECIFICAR</p>
          }
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  );
};

TableItemMovies.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  awards: PropTypes.number,
  length: PropTypes.number,
  genres: PropTypes.array,
};

TableItemMovies.defaultProp = {
    genres : []
}