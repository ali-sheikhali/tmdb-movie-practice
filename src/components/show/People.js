import React from "react";
import useSWR from "swr";
import Show from "./Show";
import Loading from "../Loading";

const fetcher = (...args) => {
  return fetch(...args).then((responsive) => responsive.json());
};
function People() {
  
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const { data: people, error } = useSWR(
    `https://api.themoviedb.org/3/person/popular?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (error) {
    return <h2>Data not fetched</h2>;
  }

  if (!people) {
    return <Loading /> ;
  }
  return (
    <div>
      <Show name={people.results} showKnownFor={true}  />
    </div>
  );
}

export default People;
