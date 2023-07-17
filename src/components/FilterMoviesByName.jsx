import { useState } from "react";
import { NewObjectFilm } from "./NewObjectFilm";

export function FilterMoviesByName () {
  const [searchString, setSearchString] = useState("");

  const filteredMovies = NewObjectFilm.filter(
    (movie) => movie.title.includes(searchString)
  );

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <input className="inputStyle" type="text" value={searchString} onChange={handleInputChange} />
      {filteredMovies.map((movie, id) => (
        <div key={id}>
          
          <h4>Title: {movie.title}</h4>
    
        </div>
      ))}
    </div>
  );
};