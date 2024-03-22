import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import LikeMovie from "./components/LikeMovie";
import Footer from "./components/Footer";
import LoginSignin from "./pages/LoginSignin";
import People from "./components/show/People";
import TvShow from "./components/show/TvShow";
import Movies from "./components/show/Movies";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={MovieDetails} />
          <Route path="/fav-movie" Component={LikeMovie} />
          <Route path="/login-sign" Component={LoginSignin} />
          <Route path="/people" Component={People} />
          <Route path="/tv-shows" Component={TvShow} />
          <Route path="/movies" Component={Movies} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
