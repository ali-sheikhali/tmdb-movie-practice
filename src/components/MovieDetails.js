import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import BorderStyle from "./BorderStyle";
import FavoriteMovie from "./FavoriteMovie";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "./store/favoriteSlice";

const fetcher = (...args) =>
  fetch(...args).then((responsive) => responsive.json());

function MovieDetails() {
  
  const dispatch = useDispatch();
  const favoriteMovie = useSelector((state) => state.favorite);

  const addToFavoriteHandle = (data) => {
    const movieExist = favoriteMovie.some(
      (favmovie) => favmovie.id === data.id
    );
    if (!movieExist) {
      dispatch(addToFavorite(data));
    }
  };

  const { id } = useParams();
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (error) {
    return <div>Error loading details</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full bg-gradient-to-r from-[#01b4e4] to-[#408ea3]">
      <div className="w-10/12 mx-auto py-5 flex flex-col md:flex-row gap-5 my-5">
        <figure className="flex justify-center w-6/12">
          <img
            className="rounded-lg w-[220px]"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
            alt=""
          />
        </figure>
        <div className="flex flex-col justify-center space-y-2 w-6/12 ">
          <h3 className="text-2xl font-bold">{data.title}</h3>
          <p>
            {data.release_date} / {data.genres[0].name} /{data.runtime} min{" "}
          </p>
          <div className="relative flex items-center space-x-10">
            <button
              onClick={() => {
                addToFavoriteHandle(data);
              }}
              className="text-white p-1 bg-[#032541] rounded-full"
            >
              <FavoriteMovie />
            </button>
            <span>
              <BorderStyle movie={data.vote_average} />
            </span>
          </div>
          <p>{data.tagline}</p>
          <div className="hidden md:block">
            <p className="font-bold">overview: </p>
            {data.overview}
          </div>
        </div>
        <div className="md:hidden">
          <p className="font-bold">overview: </p>
          {data.overview}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
