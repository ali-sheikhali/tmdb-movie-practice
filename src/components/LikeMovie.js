import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToFavorite } from "./store/favoriteSlice";
function LikeMovie() {
  const favoriteMovies = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeToFavorite(id));
  };
  return (
    <div>
      <h2>Your favorite movie</h2>
      {favoriteMovies.map((movie) => (
        <div key={movie.id}>
          {movie.title ? movie.title : movie.name}
          <p onClick={() => handleDelete(movie.id)}>delete</p>
        </div>
      ))}
    </div>
  );
}

export default LikeMovie;
