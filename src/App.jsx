import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePage from "./components/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNetflix from "./components/Home";
import MovieDetails from "./components/movieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNetflix />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
