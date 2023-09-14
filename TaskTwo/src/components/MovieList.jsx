import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTopRatedMoviesData = async () => {
    const API_KEY = "3084365d7a53c4a43a67bbbf2f3b89a3";
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

    try {
      const res = await axios.get(url);
      const data = await res.data.results;
      setMovieList(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRatedMoviesData();
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">Top Rated</h2>
      {loading ? (
        <p>Movie List Loading...</p>
      ) : error ? (
        <p>Error: {`${error.message}. Can not fetch the movies list.`}</p>
      ) : (
        <div className="list__cards">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
