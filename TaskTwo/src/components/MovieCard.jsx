import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const posterImageSrc =
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
      : "";

  return (
    <>
      {isLoading ? (
        <div className="movieCards" data-testid="movie-card">
          <SkeletonTheme>
            <Skeleton />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movies/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="movieCards" data-testid="movie-card">
            <img
              data-testid="movie-poster"
              className="cards__img"
              src={posterImageSrc}
            />
            <div className="cards__overlay">
              <div className="card__title" data-testid="movie-title">
                {movie ? movie.title : ""}
              </div>
              <div
                className="card__releaseDate"
                data-testid="movie-release-date"
              >
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" style={{ fontSize: "0.6rem" }} />
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.any,
};

export default MovieCard;
