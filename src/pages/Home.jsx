import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <h1>Welcome to Street Wonderer</h1>
      <Link to="/Game">Play</Link>
    </div>
  );
}

export default Home;
