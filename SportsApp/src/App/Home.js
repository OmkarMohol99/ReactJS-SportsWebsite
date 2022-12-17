import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Sport.css";

const Home = () => {
  const navigate = useNavigate();
  const navigateToLeagues = () => {
    navigate("/league"); //Navigate to Leagues
  };

  const navigateToSports = () => {
    navigate("/sports");
  };

  return (
    <>
      <div class="parent-image">
        <img
          src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg"
          alt="car"
          style={{ height: "100%", width: "100%", marginTop: -200 }}
        />
        <div className="container" class="parent-ls">
          <button
            onClick={navigateToLeagues}
            style={{ marginRight: 80 }}
            className="btn btn-info btn-lg"
          >
            LEAGUES
          </button>
          <button className="btn btn-warning btn-lg" onClick={navigateToSports}>
            SPORTS
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
