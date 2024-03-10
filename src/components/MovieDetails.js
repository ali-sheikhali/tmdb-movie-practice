import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { FaHeart } from "react-icons/fa";

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
  const getBorderStyle = (voteAverage) => {
    let borderColor;
    if (voteAverage < 5) {
      borderColor = "red";
    } else if (voteAverage < 7) {
      borderColor = "orange";
    } else if (voteAverage < 9) {
      borderColor = "green";
    } else {
      borderColor = "rgb(255,215,0)";
    }
    return { borderColor, borderWidth: "4px", borderStyle: "solid" };
  };
  console.log(data);
  return (
    <div className="my-5 w-full bg-gradient-to-r from-[#01b4e4] to-[#408ea3]">
      <div className="w-10/12 mx-auto py-5 flex flex-col gap-5">
        <figure className="flex justify-center">
          <img
            className="rounded-lg"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}
            alt=""
          />
        </figure>
        <div className="flex flex-col justify-center space-y-2 ">
          <h3 className="text-2xl font-bold">{data.title}</h3>
          <p>
            {data.release_date} / {data.genres[0].name} /{data.runtime} min{" "}
          </p>
          <div className="flex items-center space-x-10">
            <p
              className=" rounded-full p-1 bg-[#032541] text-white"
              style={getBorderStyle(data.vote_average)}
            >
              {parseFloat(data.vote_average).toFixed(1)}
            </p>

            <span className="p-3 text-white bg-[#032541] rounded-full">
              <FaHeart />
            </span>
          </div>
          <p>{data.tagline}</p>
         
      
        </div>
        <div >
            <p className="font-bold">overview: </p>
            {data.overview}
          </div>
      </div>
    </div>
  );
}

export default MovieDetails;
