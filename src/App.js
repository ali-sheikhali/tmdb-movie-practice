import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={MovieDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
