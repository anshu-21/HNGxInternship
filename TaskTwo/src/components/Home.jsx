import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieList from "./MovieList";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchPopularMoviesData = async () => {
    const API_KEY = "3084365d7a53c4a43a67bbbf2f3b89a3";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

    try {
      const res = await axios.get(url);
      const data = await res.data.results;
      setPopularMovies(data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularMoviesData();
  }, []);

  const poster = popularMovies.map((movie) => (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={`/movie/${movie.id}`}
      key={movie.id}
    >
      <div className="posterImage" data-testid="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`}
          alt="poster"
        />
      </div>
      <div className="posterImage__overlay">
        <div className="posterImage__title" data-testid="movie-title">
          {movie ? movie.title : ""}
        </div>
        <div
          className="posterImage__releaseDate"
          data-testid="movie-release-date"
        >
          {movie ? movie.release_date : ""}
          <span className="posterImage__rating">
            {movie ? movie.vote_average : ""}{" "}
            <i className="fas fa-star" style={{ fontSize: "1.2rem" }} />{" "}
          </span>
        </div>
        <div className="posterImage__description">
          {movie ? movie.overview : ""}
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {poster}
        </Carousel>
      </div>
      <MovieList />
    </>
  );
};

export default Home;
