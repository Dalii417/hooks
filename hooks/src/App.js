import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { moviesData } from "./Data";
import { useState } from "react";
import Navigation from "./Component/Navigation";
import MovieList from "./Component/MovieList";
import AddMovie from "./AddMovie";
import Details from "./Component/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(moviesData);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MovieList movies={movies} />} />
          <Route
            exact
            path="/details/:id"
            element={<Details movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
