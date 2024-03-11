import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToFavorite } from "./store/favoriteSlice";
import { Link } from "react-router-dom";
import BorderStyle from "./BorderStyle";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlinePlayCircle } from "react-icons/md";

function LikeMovie() {
  const favoriteMovies = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  console.log(favoriteMovies);
  const handleDelete = (id) => {
    dispatch(removeToFavorite(id));
  };
  return (
    <div className="w-10/12 mx-auto my-10">
      <h3 className="font-bold text-xl p-3">Your favorite movie</h3>
      <section className="w-10/12 mx-auto grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center my-5 ">
        {favoriteMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div
              className="shadow-md rounded-md h-[450px] w-9/12 mx-auto md:w-[250px] m-5 md:m-0"
              key={movie.id}
            >
              <figure className="relative flex justify-center p-2">
                <img
                  className=" rounded-lg"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt=""
                />
                <div className="absolute top-0 left-9">
                  <BorderStyle movie={movie.vote_average} />
                </div>
              </figure>
              <div className="py-3 px-5">
                <p
                  className={
                    movie.title?.length > 30 || movie.name?.length > 30
                      ? "text-[10px] "
                      : "text-xl"
                  }
                >
                  {movie.title ? movie.title : movie.name}
                </p>
                <div className="flex justify-around my-3">
                  <button className="bg-green-400 text-white px-2 py-1 rounded-md flex items-center">
                    Watch
                    <MdOutlinePlayCircle />
                  </button>
                  <button
                    className="bg-red-400 text-white px-2 py-1 rounded-md flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(movie.id);
                    }}
                  >
                    Delete
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default LikeMovie;
