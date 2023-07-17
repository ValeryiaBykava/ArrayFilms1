import { useState } from "react";
import { NewObjectFilm } from "./NewObjectFilm";

export function FilterMoviesByPlot () {
  const [searchString, setSearchString] = useState("");

  const filteredMovies = NewObjectFilm.filter(
    (movie) => movie.title.includes(searchString) || movie.plot.includes(searchString)
  );

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <input className="inputStyle" type="text" value={searchString} onChange={handleInputChange}/>
      {filteredMovies.map((movie, id) => (
        <div key={id}>
          <h4>Title: {movie.title}</h4>
          <h4>Plot: {movie.plot}</h4>
          <br/>
        </div>
      ))}
    </div>
  );
};