import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${movies.imdbID}`);
  };

  return (
    <div
      className="w-42 h-64 shadow-2xl cursor-pointer hover:-translate-y-0.5 hover:ease-in rounded overflow-hidden bg-gray-800"
      onClick={handleNavigate}
    >
      <img
        src={movies.Poster}
        alt={movies.Title}
        title={movies.Title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
