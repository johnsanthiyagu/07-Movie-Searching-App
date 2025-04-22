import axios from "axios";
import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const API_KEY = "731528e";
  const BASE_URL = "https://www.omdbapi.com/";

  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movieType, setMovieType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber = 1) => {
    if (!movieName) return;

    setLoading(true);
    setError(null);

    try {
      const params = {
        apikey: API_KEY,
        s: movieName,
        page: pageNumber,
      };

      if (movieType) {
        params.type = movieType; // Add type only if selected
      }

      const response = await axios.get(BASE_URL, { params });

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
        setPage(pageNumber);
      } else {
        setMovies([]);
        setTotalResults(0);
        setError("No results found.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
      setTotalResults(0);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        movieName,
        setMovieName,
        movieType,
        setMovieType,
        fetchMovies,
        page,
        setPage,
        totalResults,
        error,
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
