import {Genres} from "./components/Genres"
import {Actors} from "./components/Actors"
import {Rating} from "./components/Rating"
import {NewArray} from "./components/NewArray"
import {FilterMoviesByYear} from "./components/FilterMoviesByYear"
import {FilterMoviesByName} from "./components/FilterMoviesByName"
import {FilterMoviesByPlot} from "./components/FilterMoviesByPlot"
// import {FilterMoviesArrayString} from "./components/FilterMoviesArrayString"
import {GenresTask} from "./components/Tasks"
import {ActorsTask} from "./components/Tasks"
import {RatingTask} from "./components/Tasks"
import {NewArrayTask} from "./components/Tasks"
import {FilterMoviesByYearTask} from "./components/Tasks"
import {FilterMoviesByNameTask} from "./components/Tasks"
import {FilterMoviesByPlotTask} from "./components/Tasks"
// import {FilterMoviesArrayStringTask} from "./components/Tasks"

import './App.css';


function App() {
  return (
    <div>
      <div>
        <GenresTask/>
        <Genres/>
      </div>
      <hr/>
      <div>
        <ActorsTask/>
        <Actors/>
      </div>
      <hr/>
      <div>
        <RatingTask/>
        <Rating/>
      </div>
      <hr/>
      <div>
        <NewArrayTask/>
        <NewArray/>
      </div>
      <hr/>
      <div>
        <FilterMoviesByYearTask/>
        <FilterMoviesByYear/>
      </div>
      <hr/>
      <div>
        <FilterMoviesByNameTask/>
        <FilterMoviesByName/>
      </div>
      <hr/>
      <div>
        <FilterMoviesByPlotTask/>
        <FilterMoviesByPlot/>
      </div>
      <hr/>
      {/* <div>
        <FilterMoviesArrayStringTask/>
        <FilterMoviesArrayString/>
      </div> */}
   
      
      
      
      
    
      
    </div>
  );
}


export default App;
