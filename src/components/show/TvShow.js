import React from "react";
import useSWR from "swr";
import Show from "./Show";

const fetcher = (...args) => {
  return fetch(...args).then((responsive) => responsive.json());
};

function TvShow() {
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const { data: TvShow, error } = useSWR(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (error) {
    return <h2>Data not fetched</h2>;
  }

  if (!TvShow) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Show name={TvShow.results} showAverage={true} />
    </div>
  );
}

export default TvShow;
