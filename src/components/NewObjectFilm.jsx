import films from "../films.json";
export const NewObjectFilm = films.map((film) => {
    return {
      id: film.id,
      title: film.title,
      released: film.released,
      plot: film.plot,
      year: film.year,
    };
  });
  console.log(NewObjectFilm);