import React from "react";
import Slider from "react-slick";
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

  return (
    <div className="w-10/12 mx-auto my-10">
      <h3 className="font-bold text-xl p-3">{title}</h3>
      <div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="flex flex-col p-3">
                <figure>
                  <img
                    className=" rounded-2xl "
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt=""
                  />
                  <div
                    className="absolute top-1   rounded-full p-1 bg-black text-white"
                    style={getBorderStyle(movie.vote_average)}
                  >
                    {parseFloat(movie.vote_average).toFixed(1)}
                  </div>
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
