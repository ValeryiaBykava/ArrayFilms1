import {Genres} from "./components/Genres"
import {Actors} from "./components/Actors"
import {Rating} from "./components/Rating"
import {NewArray} from "./components/NewArray"
import films from "./films.json";
import './App.css';

const titleYear = films.map((film) => {
        return {        
          title: film.title,
          year: film.year,
        };
      })
console.log(titleYear);

function FilterMoviesByYear({titleYear}) {
  return (
  <div>
      <h2>Films+year</h2>
      <ul>
        {titleYear.map((titleYe) => (
          <li>Films: {titleYe.title} Year: {titleYe.year}</li>
        ))}
      </ul>
    </div>)
  }
  
  // const filteredMovies = filterMoviesByYear(films);
  // console.log(filteredMovies);

function App() {
  return (
    <div>
      <Genres/>
      <Actors/>
      <Rating/>
      <NewArray/>
      <FilterMoviesByYear titleYear={titleYear} />
      {/* {filterMoviesByYear(films)} */}
    </div>
  );
}


export default App;
