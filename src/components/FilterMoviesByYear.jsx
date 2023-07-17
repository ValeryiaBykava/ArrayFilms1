import { useState } from "react";
import {NewObjectFilm} from "./NewObjectFilm"

export function FilterMoviesByYear () {
    const [findNumber, setFindNumber] = useState("")
    const [foundFilm, setFoundFilm] = useState(null);

    const handleClick = () => {
        const filteredMovies = NewObjectFilm.filter((film) => film.year === parseInt(findNumber));
        if (filteredMovies.length > 0) {
            setFoundFilm(filteredMovies[0]);
        } else {
          setFoundFilm(null);
        }
    }
    return(
        <>
        <h1>Введите год и сможете найти фильм</h1>
            <input className="inputStyle" type="number" value={findNumber} onChange={(e) => setFindNumber(e.target.value)}></input>
            <button onClick={handleClick}>find</button>
            {foundFilm ? ( <div>{foundFilm.title}</div>) : (<div>фильм не найден</div>)}
        </>
    )
}
