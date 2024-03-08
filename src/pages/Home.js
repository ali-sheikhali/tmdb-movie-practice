import React from "react";
import HeroHeader from "../components/HeroHeader";
import MovieSection from "../components/api/MovieSection";
import useSWR from "swr";
import UpcomingMovie from "../components/api/UpcomingMovie";

const fetcher = (...args) =>
  fetch(...args).then((responsive) => responsive.json());

function Home() {
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";

  const {
    data: trendingMovie,
    error: trendingMovieError,
    isLoading: trendingMovieIsLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  const {
    data: popularMovie,
    error: popularMovieError,
    isLoading: popularMovieIsLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${apiKey}`,
    fetcher
  );

  const { data: upcomingMovie, error: upcomingMovieError } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-USapi_key=${apiKey}`,
    fetcher
  );
    console.log(upcomingMovie);
  if (trendingMovieError || popularMovieError || upcomingMovieError) {
    return <h1>Not found</h1>;
  }
  if (trendingMovieIsLoading || popularMovieIsLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <HeroHeader />
      <MovieSection title="Trending" movies={trendingMovie.results} />
      <UpcomingMovie title="pcoming Movie" movies={upcomingMovie.results} />
      <MovieSection title="What's Popular" movies={popularMovie.results} />
    </div>
  );
}

export default Home;
