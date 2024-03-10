import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { FaHeart } from "react-icons/fa";
import BorderStyle from "./BorderStyle";
import Footer from "./Footer";
import FavoriteMovie from "./FavoriteMovie";

const fetcher = (...args) =>
  fetch(...args).then((responsive) => responsive.json());
function MovieDetails() {
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
  console.log(data);
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
            <span className="text-white p-1 bg-[#032541] rounded-full">
              <FavoriteMovie />
            </span>
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
      <Footer />
    </div>
  );
}

export default MovieDetails;
