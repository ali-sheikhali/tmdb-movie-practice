import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return <div>
        <Router>
            <Navbar />
            <Routes>
                <Route />
            </Routes>
        </Router>
  </div>;
}

export default App;
