/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSearchResults = async (query) => {
    const API_KEY = "3084365d7a53c4a43a67bbbf2f3b89a3";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;

    try {
      const res = await axios(url);
      const data = await res.data.results;
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="movie__list">
      <h2 className="list__title">Search Results for "{searchQuery}"</h2>
      {loading ? (
        <p>Search Result Loading...</p>
      ) : error ? (
        <p>Error: {`${error.message}. Can not fetch search results.`}</p>
      ) : (
        <div className="list__cards">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
