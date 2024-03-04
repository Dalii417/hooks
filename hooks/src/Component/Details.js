import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = ({ movies }) => {
  console.log(movies);
  const { id } = useParams();
  console.log(id);

  let movie = movies.find((m) => m.id == id);
  console.log("movie :");
  console.log(movie);

  return (
    <div>
      <h1>description: {movie.description}</h1>
      <video width="320" height="240" controls>
        <source src={movie.posterUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <br></br>
      <Link to="/">Retour</Link>
    </div>
  );
};

export default Details;
