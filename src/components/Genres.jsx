import films from "../films.json";

export const Genres = () => {
  const genres = [...new Set(films.flatMap((film) => film.genre))];
  return (
    <div>
      <h1>Genres:</h1>
      <ul>
        {console.log(genres)}
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

