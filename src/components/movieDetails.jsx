import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNetflix from "./headerNetflix";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${params.movieId}&apikey=6e542a6f`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params.movieId]);

  if (!movie) return <p>Caricamento...</p>;

  return (
    <>
      <HeaderNetflix />
      <Container className="m-5 p-5 text-white">
        <Row>
          <Col md={4}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img-fluid"
            />{" "}
          </Col>
          <Col md={8}>
            <h1>
              {movie.Title} ({movie.Year})
            </h1>
            <p className="lead">{movie.Plot}</p>
            <ul>
              <li>
                <strong>Regia:</strong> {movie.Director}
              </li>
              <li>
                <strong>Cast:</strong> {movie.Actors}
              </li>
              <li>
                <strong>Rating:</strong> {movie.imdbRating}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
