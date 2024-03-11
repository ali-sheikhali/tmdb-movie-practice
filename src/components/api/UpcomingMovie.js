import React from "react";
import Slider from "react-slick";
import BorderStyle from "../BorderStyle";
import FavoriteMovie from "../FavoriteMovie";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../store/favoriteSlice";

function UpcomingMovie({ title, movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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

  return (
    <div className="w-10/12 mx-auto my-10">
      <h3 className="font-bold text-xl p-3">{title}</h3>
      <div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="flex flex-col p-3">
                <figure className="relative">
                  <img
                    className=" rounded-2xl "
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt=""
                  />
                  <div className="absolute top-1   rounded-full p-1 bg-black text-white">
                    <BorderStyle movie={movie.vote_average} />
                  </div>
                 
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleFavorite(movie);
                    }}
                    className=" text-white absolute bottom-1 right-3"
                  >
                    <FavoriteMovie />
                  </button>
                </figure>
                <div className="px-2">
                  <p className="font-bold hover:text-[rgba(1,180,228,1)] ">
                    {movie.title ? movie.title : movie.original_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default UpcomingMovie;
