import { Component } from "react";
import { Col, Card, Row, Spinner, Alert } from "react-bootstrap";

class CardNetflix extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovies = () => {
    const saga = this.props.searchSaga;
    fetch(`https://www.omdbapi.com/?s=${saga}&apikey=6e542a6f`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Response errata", response.status);
        }
      })
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search, isLoading: false });
        } else {
          this.setState({ movies: [], isLoading: false });
        }
      })
      .catch((err) => {
        console.log("Si è verificato un errore", err);
        this.setState({ isLoading: false, isError: true });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, isLoading, isError } = this.state;
    return (
      <Row xs={2} md={3} xl={6} className="p-3 g-3">
        {isLoading && <Spinner animation="border" />}
        {isError && <Alert variant="danger">Errore nel caricamento</Alert>}
        {!isLoading &&
          !isError &&
          movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} />
              </Card>
            </Col>
          ))}
      </Row>
    );
  }
}

export default CardNetflix;
