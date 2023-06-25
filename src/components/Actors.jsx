import films from "../films.json";

export const Actors = () => {
  const actors = [...new Set(films.flatMap((film) => film.actors))];
  return (
    <div>
      <h1>Actors:</h1>
      <ul>
        {console.log(actors)}
        {actors.map((actors, index) => (
          <li key={index}>{actors}</li>
        ))}
      </ul>
    </div>
  );
};

