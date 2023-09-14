import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchTopRatedMoviesData();
  }, []);

  const fetchTopRatedMoviesData = async () => {
    const API_KEY = "3084365d7a53c4a43a67bbbf2f3b89a3";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

    try {
      const res = await axios.get(url);
      const data = await res.data.results;
      setMovieList(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">Top Rated</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
