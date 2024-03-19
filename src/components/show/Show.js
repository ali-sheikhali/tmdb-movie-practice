import React from "react";
import BorderStyle from "../BorderStyle";
import { Link } from "react-router-dom";
function Show({ name, showKnownFor, showAverage }) {
  return (
    <div
      className="w-9/12 lg:w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
     justify-center items-center rounded-md gap-5"
    >
      {name.map((items) => (
        <div
          className="w-[315px] md:w-[280px] xl:w-[250px] mx-auto h-[410px] flex flex-col  shadow-md py-2"
          key={items.id}
        >
          <Link to={`./movie/${items.id}`}>
            <figure className="flex justify-center items-center relative">
              <img
                className=" rounded-2xl"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${
                  items.profile_path || items.poster_path
                }`}
                alt=""
              />
              <div className="absolute top-[-10px] left-8 md:left-3 lg:left-0">
                {showAverage && <BorderStyle movie={items.vote_average} />}
              </div>
            </figure>
          </Link>
          <div className="mx-5 whitespace-normal overflow-hidden ">
            <div className="font-bold">{items.name || items.title}</div>
            <div className="">{showAverage && items.first_air_date}</div>
            <div className="">{showAverage && items.release_date}</div>
            <div className="flex text-sm text-slate-500 whitespace-nowrap">
              {showKnownFor &&
                items.known_for.map((item, index) => (
                  <div key={item.id}>
                    {item.name || item.title}
                    {index !== items.known_for.length - 1 && "  ,"}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Show;
