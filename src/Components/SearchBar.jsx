import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setMovieName, fetchMovies, movieName, movieType, setMovieType } =
    useContext(MovieContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/movie");
    fetchMovies();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNavigate();
    }
  };

  return (
    <div className="flex justify-center items-center md:w-1/2 w-full">
      <input
        type="text"
        className="bg-gray-300 rounded-l text-gray-900 font-semibold px-3 h-8 w-1/2 "
        placeholder="Search Movies"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* Dropdown Filter */}
      <select
        value={movieType}
        onChange={(e) => setMovieType(e.target.value)}
        className="bg-gray-300 border-l border-gray-400 text-gray-900 font-semibold px-3 h-8"
        onClick={handleNavigate}
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
      <FaSearch
        className="bg-gray-300 rounded-r text-gray-900 border-l border-gray-400 w-12 h-8 p-2 cursor-pointer hover:text-gray-950"
        onClick={handleNavigate}
      />
    </div>
  );
};

export default SearchBar;
