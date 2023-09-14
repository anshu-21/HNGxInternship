import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Movie = () => {
  const [currentMovieDetail, setCurrentMovieDetail] = useState();
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const getMovieData = async () => {
    const API_KEY = "3084365d7a53c4a43a67bbbf2f3b89a3";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    try {
      const res = await axios.get(url);
      setCurrentMovieDetail(res.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = () => {
    setButtonClicked(!isButtonClicked);
    const isAlreadyInFavorites = favoriteMovies.some(
      (favorite) => favorite.id === currentMovieDetail.id
    );
    if (!isAlreadyInFavorites) {
      setFavoriteMovies([...favoriteMovies, currentMovieDetail]);
    } else {
      const updatedFavorites = favoriteMovies.filter(
        (favorite) => favorite.id !== currentMovieDetail.id
      );
      setFavoriteMovies(updatedFavorites);
    }
  };
  const isMovieInFavorites = favoriteMovies.some(
    (favorite) => favorite.id === currentMovieDetail.id
  );

  const buttonStyles = {
    backgroundColor: isMovieInFavorites ? "#33FF38" : "#e9e1e1",
    color: isMovieInFavorites ? "white" : "black",
  };

  const buttonText = isMovieInFavorites ? "Remove ❤️" : "Add 🤍";

  const backdropImageSrc =
    currentMovieDetail && currentMovieDetail.backdrop_path
      ? `https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`
      : "";

  const posterImageSrc =
    currentMovieDetail && currentMovieDetail.poster_path
      ? `https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`
      : "";

  return (
    <div className="movie">
      {loading ? (
        <p>Movie Details Loading...</p>
      ) : error ? (
        <p>Error: {`${error.message}. Can not fetch movie details.`}</p>
      ) : (
        <>
          <div className="movie__intro">
            <img className="movie__backdrop" src={backdropImageSrc} />
          </div>
          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__posterBox">
                <img className="movie__poster" src={posterImageSrc} />
              </div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__title" data-testid="movie-title">
                  {currentMovieDetail ? currentMovieDetail.original_title : ""}
                </div>
                <div className="movie__tagline">
                  {currentMovieDetail ? currentMovieDetail.tagline : ""}
                </div>
                <div className="movie__rating">
                  {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                  <i className="fas fa-star" />
                  <span className="movie__voteCount">
                    {currentMovieDetail
                      ? "(" + currentMovieDetail.vote_count + ") votes"
                      : ""}
                  </span>
                </div>
                <div className="movie__runtime" data-testid="movie-runtime">
                  {currentMovieDetail
                    ? currentMovieDetail.runtime + " mins"
                    : ""}
                </div>
                <div
                  className="movie__releaseDate"
                  data-testid="movie-release-date"
                >
                  {currentMovieDetail
                    ? "Release date: " + currentMovieDetail.release_date
                    : ""}
                </div>
                <div className="movie__genres">
                  {currentMovieDetail && currentMovieDetail.genres
                    ? currentMovieDetail.genres.map((genre) => (
                        <span key={uuidv4()}>
                          <span className="movie__genre" id={genre.id}>
                            {genre.name}
                          </span>
                        </span>
                      ))
                    : ""}
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <div className="overview">Overview</div>
                <div data-testid="movie-overview">
                  {currentMovieDetail ? currentMovieDetail.overview : ""}
                </div>
                <button
                  style={buttonStyles}
                  className="clicked"
                  onClick={clickHandler}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="movie__links">
            <div className="movie__heading">Useful Links</div>
            {currentMovieDetail && currentMovieDetail.homepage && (
              <a
                href={currentMovieDetail.homepage}
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <p>
                  <span className="movie__homeButton movie__Button">
                    Homepage <i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
            {currentMovieDetail && currentMovieDetail.imdb_id && (
              <a
                href={
                  "https://www.imdb.com/title/" + currentMovieDetail.imdb_id
                }
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <p>
                  <span className="movie__imdbButton movie__Button">
                    IMDb<i className="newTab fas fa-external-link-alt"></i>
                  </span>
                </p>
              </a>
            )}
          </div>
          <div className="movie__heading">Production companies</div>
          <div className="movie__production">
            {currentMovieDetail &&
              currentMovieDetail.production_companies &&
              currentMovieDetail.production_companies.map((company) => (
                <span key={uuidv4()}>
                  {company.logo_path && (
                    <span className="productionCompanyImage">
                      <img
                        className="movie__productionComapany"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                      />
                      <span>{company.name}</span>
                    </span>
                  )}
                </span>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
