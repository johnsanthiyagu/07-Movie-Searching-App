import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MoviesDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=731528e&i=${id}`)
      .then((res) => setMovie(res.data))
      .catch((error) => console.error("fetching Error", error));
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-900">
      <div className=" text-white mt-32 mb-20 md:px-10 items-center flex flex-col ">
        <p className="flex justify-center items-center text-4xl underline px-6">
          {movie.Title}
        </p>
        <div className="md:flex items-center justify-center py-10 gap-8 w-4/6">
          <div className="w-1/2 h-1/2">
            <img
              src={movie.Poster}
              alt={movie.Title}
              title={movie.Title}
              className="w-full h-full "
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <p>
              <span className="text-gray-600 font-medium">Title: </span>
              {movie.Title}
            </p>
            <p>
              <span className="text-gray-600 font-medium">Year: </span>
              {movie.Year}
            </p>
            <p>
              <span className="text-gray-600 font-medium">Language: </span>
              {movie.Language}
            </p>
            <p>
              <span className="text-gray-600 font-medium">Genre: </span>
              {movie.Genre}
            </p>
            <p>
              <span className="text-gray-600 font-medium">Released on: </span>
              {movie.Released}
            </p>
            <div className="flex items-center gap-2">
              <p className="bg-amber-500 px-1 rounded text-black font-bold">
                imdb
              </p>
              {movie.imdbRating}
              <span>
                <FaStar className="text-amber-500 text-sm" />
              </span>
            </div>
            <div className="flex gap-6 py-2">
              <button className="cursor-pointer font-bold bg-amber-600 px-6 rounded text-black p-1.5">
                Watch Movie
              </button>
              <button className="cursor-pointer font-semibold text-amber-500 px-6 rounded border p-1.5">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16">
          <div className="flex flex-col md:w-1/2 px-4 gap-2 ">
            <p className="font-medium">
              Director :
              <span className="text-blue-500 px-2">{movie.Director}</span>
            </p>
            <p className="font-medium">
              Writer :<span className="text-blue-500 px-2">{movie.Writer}</span>
            </p>
            <p className="font-medium">
              Actors :<span className="text-blue-500 px-2">{movie.Actors}</span>
            </p>
            <p className="font-medium">
              Awards :<span className="text-blue-500 px-2">{movie.Awards}</span>
            </p>

            <p className="font-medium">
              Country :
              <span className="text-blue-500 px-2">{movie.Country}</span>
            </p>
            <p className="font-medium">
              BoxOffice :
              <span className="text-blue-500 px-2">{movie.BoxOffice}</span>
            </p>
            <p className="font-medium">
              Rated :<span className="text-blue-500 px-2">{movie.Rated}</span>
            </p>
            <p className="font-medium">
              Duration :
              <span className="text-blue-500 px-2">{movie.Runtime}</span>
            </p>
            <p className="font-medium">
              IMDB Votes :
              <span className="text-blue-500 px-2">{movie.imdbVotes}</span>
            </p>
            <p className="font-medium">
              Plot :<span className="text-blue-500 px-2">{movie.Plot}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
