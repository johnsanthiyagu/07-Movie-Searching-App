import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

const MovieCategory = () => {
  const { movies, fetchMovies } = useContext(MovieContext);
  const navigate = useNavigate();
  const handleClick = (genre) => {
    if (movies.Genre === genre.toUpperCase()) {
      navigate("/movies");
      fetchMovies();
      console.log(movies.Genre);
    }
  };
  return (
    <>
      <div className="fixed top-12 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 w-screen opacity-95 z-100 backdrop-blur-3xl ">
        <div className="flex justify-center items-center text-white">
          <p
            className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 "
            onClick={() => handleClick("horror")}
          >
            Horror
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Action
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Thriller
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Sci-fi
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Animation
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Comedy
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Drama
          </p>
          <p className="cursor-pointer border-r border-dotted px-6   hover:text-gray-300 ">
            Romance
          </p>
          <p className="cursor-pointer  border-dotted px-6   hover:text-gray-300 ">
            Mystery
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCategory;
