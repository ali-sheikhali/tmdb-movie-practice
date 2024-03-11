import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import BorderStyle from "../BorderStyle";
import FavoriteMovie from "../FavoriteMovie";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../store/favoriteSlice";

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
function MovieSection({ title, movies }) {
  
  const dispatch = useDispatch();
  const favoriteMovie = useSelector((state) => state.favorite);

  const handleFavorite = (movie) => {
    const movieExist = favoriteMovie.some(
      (favMovie) => favMovie.id === movie.id
    );
    if (!movieExist) {
      dispatch(addToFavorite(movie));
    }
  };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 100,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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

  return (
    <div className=" w-10/12 mx-auto slider-container my-10">
      <h3 className="font-bold text-xl p-3">{title}</h3>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div className=" p-3 h-[380px]" key={movie.id}>
            <Link to={`./movie/${movie.id}`}>
              <div className="flex flex-col space-y-3 relative">
                <figure className="relative">
                  <img
                    className=" rounded-2xl "
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt=""
                  />
                  <div className="top-[-10px] absolute">
                    <BorderStyle movie={movie.vote_average} />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleFavorite(movie);
                    }}
                    className=" text-white absolute bottom-0 right-1"
                  >
                    <FavoriteMovie />
                  </button>
                </figure>
                <div className="px-2">
                  <p className="font-bold hover:text-[rgba(1,180,228,1)] ">
                    {movie.title ? movie.title : movie.original_name}
                  </p>
                  <p>
                    {movie.release_date
                      ? movie.release_date
                      : movie.first_air_date}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieSection;
