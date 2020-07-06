import React, {useState} from 'react';
import './App.css';
import movies from './movies.json';

function App() {
    const [currentMovie,setCurrentMovie] = useState("");
    const [newMovie,setNewMovie]= useState(movies);

    function searchMovies (event) {
        setCurrentMovie(event.target.value);
    }

    function filterByName(){
        if( currentMovie == ""){
            return newMovie.map((movie,id)=><li key={id}>{movie.name} {movie.year}</li>);
        } else {
            const moviesFound = newMovie.filter(movie => movie.name.toLowerCase().indexOf(currentMovie.toLowerCase()) !==-1);
            return moviesFound.map((movie,id)=><li key={id}>{movie.name} {movie.year}</li>);
        }
    }

    function addMovie (event) {
        event.preventDefault();
        if(event.target !== "") {
            const movie = {
                name: event.target.title.value,
                year: event.target.year.value
            };
            setNewMovie([... newMovie,movie]);
        }
    }

  return (
    <div className="App">
        <label>Recherche film :</label>
      <input onChange={searchMovies} value={currentMovie}/>
      <div>
          <p>Pour ajouter un film :</p>
          <form onSubmit={addMovie}>
              <label>Name :</label>
              <input type="text" name="title"></input> <br/>
              <label>Year :</label>
              <input type="text" name="year"></input> <br/>
              <input type="submit"/>
          </form>
      </div>
      <ul>{filterByName()}</ul>
    </div>
  );
}

export default App;
