import React from "react";
import HeroHeader from "../components/HeroHeader";
import MovieSection from "../components/api/MovieSection";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args).then((responsive) => responsive.json());

function Home() {
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";

  const { data: trendingMovie, error: trendingMovieError,isLoading: trendingMovieIsLoading } = useSWR(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  const {data: popularMovie,error: popularMovieError,isLoading: popularMovieIsLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (trendingMovieError || popularMovieError) {
    return <h1>Not found</h1>;
  }
  if (trendingMovieIsLoading || popularMovieIsLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <HeroHeader />
      <MovieSection title="trending" movies={trendingMovie.results} />
      <MovieSection title="What's Popular" movies={popularMovie.results} />
    </div>
  );
}

export default Home;
