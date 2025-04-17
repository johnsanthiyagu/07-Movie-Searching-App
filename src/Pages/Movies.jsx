import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

const Movies = () => {
  const { movies, fetchMovies, page, setPage, totalResults, setTotalResults } =
    useContext(MovieContext);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  console.log(movies);

  const totalPages = Math.ceil(totalResults / 10);
  return (
    <div className="flex flex-col bg-gray-800 h-full justify-center items-center ">
      <div className="grid md:grid-cols-5 container gap-6 flex-wrap justify-center items-center mt-32 mb-10 px-20">
        {movies.length > 0 ? (
          movies.map((item) => <MovieCard key={item.imdbID} movies={item} />)
        ) : (
          <p
            className={` h-screen text-gray-700 text-6xl text-center ${
              movies.length === 0
                ? "grid col-span-5 items-center justify-center"
                : ""
            }`}
          >
            No movies found
          </p>
        )}
      </div>
      {/* Pagination controls */}
      {movies.length > 0 ? (
        <div className=" flex items-center justify-center gap-4 py-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="bg-amber-500 px-2 rounded font-medium hover:bg-amber-600 cursor-pointer"
          >
            Prev
          </button>
          <p className="text-gray-400 font-medium">
            Page {page} of {totalPages}
          </p>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className="bg-amber-500 px-2 rounded font-medium hover:bg-amber-600 cursor-pointer"
          >
            Next
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movies;
