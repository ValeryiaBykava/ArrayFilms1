import {NewObjectFilm} from "./NewObjectFilm"
export const NewArray = () => {
  return (
    <div>
      <h1>New Movies:</h1>
      <ul>
        {NewObjectFilm.map((film) => (
          <li>
            id: {film.id} title: {film.title} released: {film.released} plot:{film.plot}
          </li>
        ))}
      </ul>
    </div>
  );
};


