import films from "../films.json";
export const Rating = () => {
  const sortedMovies = [...films].sort((a, b) => b.imdbRating - a.imdbRating);
  return (
    <div>
      <h1>Sorted Movies:</h1>
      <ul>
        {sortedMovies.map((film, id) => (
          <li key={id}>
            {film.title} ({film.imdbRating})
          </li>
        ))}
      </ul>
    </div>
  );
};


