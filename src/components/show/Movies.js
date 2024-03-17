import React from "react";
import useSWR from "swr";
import Show from "./Show";

const fetcher = (...args) => {
  return fetch(...args).then((res) => res.json());
};

function Movies() {
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const { data: TopMovies, error } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (error) {
    return <h2>Data not fetched</h2>;
  }

  if (!TopMovies) {
    return <h2>Loading...</h2>;
  }
  console.log(TopMovies);
  return (
    <div>
      <Show name={TopMovies.results} showAverage={true} />
    </div>
  );
}

export default Movies;
