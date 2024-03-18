import React from "react";
import HeroHeader from "../components/HeroHeader";
import MovieSection from "../components/api/MovieSection";
import useSWR from "swr";
import UpcomingMovie from "../components/api/UpcomingMovie";
import Banner from "../components/Banner";
import oscarBanner from "../components/img/oscars-banner-1.jpg";
import Footer from "../components/Footer";

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

  const {
    data: upcomingMovie,
    error: upcomingMovieError,
    isLoading: upcomingMovieErrorIsLoading,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${apiKey}`,
    fetcher
  );

  if (trendingMovieError || popularMovieError || upcomingMovieError) {
    return <h1>Not found</h1>;
  }
  if (
    trendingMovieIsLoading ||
    popularMovieIsLoading ||
    upcomingMovieErrorIsLoading
  ) {
    return <div className="skeleton w-32 h-32"></div>;
  }

  return (
    <div>
      <HeroHeader />
      <MovieSection title="Trending" movies={trendingMovie.results} />
      <Banner image={oscarBanner} />
      <UpcomingMovie title="Upcoming Movie" movies={upcomingMovie.results} />
      <MovieSection title="What's Popular" movies={popularMovie.results} />
      
    </div>
  );
}

export default Home;
