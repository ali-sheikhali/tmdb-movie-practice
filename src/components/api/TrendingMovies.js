import React from "react";
import useSWR from "swr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingMovies.css";

const getBorderStyle = (voteAverage) => {
  let borderColor;

  if (voteAverage < 5) {
    borderColor = "red";
  } else if (voteAverage < 7) {
    borderColor = "orange";
  } else if (voteAverage < 9) {
    borderColor = "green";
  } else {
    borderColor = "yellow";
  }

  return { borderColor, borderWidth: "4px", borderStyle: "solid" };
};
const fetcher = (...args) =>
  fetch(...args).then((responsive) => responsive.json());

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function TrendingMovies() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    // slidesToShow: 2,
    speed: 100,
    // dots: true,
    prevArrow: <SamplePrevArrow />, // Add custom prevArrow
    nextArrow: <SampleNextArrow />, // Add custom nextArrow
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const apiKey = "bd422e7b500e20ac0bad0f395328407c";
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`,
    fetcher
  );
  if (error) {
    return <h1>Not found</h1>;
  }
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  console.log(data);
  return (
    <div className=" w-10/12 mx-auto slider-container my-10">
      <h3 className="font-bold text-xl p-3">Trending</h3>
      <Slider {...settings}>
        {data.results.map((movie) => (
          <div className=" p-2 h-[420px]" key={movie.id}>
            <div className="flex flex-col space-y-5 relative">
              <figure>
                <img
                  className=" rounded-2xl "
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt=""
                />
                <div
                  className="absolute top-0 left-1 rounded-full p-1 bg-black text-white"
                  style={getBorderStyle(movie.vote_average)}
                >
                  {parseFloat(movie.vote_average).toFixed(1)}
                </div>
              </figure>
              <div className="px-2">
                <p className="font-bold hover:text-[rgba(1,180,228,1)] ">
                  {movie.title}
                </p>
                <p>{movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingMovies;
