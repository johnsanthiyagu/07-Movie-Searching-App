import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies";
import { MovieProvider } from "./Context/MovieContext";
import MoviesDetail from "./Pages/MoviesDetail";

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/movie" element={<Movies />} />
            <Route path="/" element={<Movies />} /> 
            <Route path="/movie/:id" element={<MoviesDetail />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
