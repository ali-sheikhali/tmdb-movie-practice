import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import LikeMovie from "./components/LikeMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={MovieDetails} />
          <Route path="/fav-movie" Component={LikeMovie} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
