import React from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./Css/Sport.css";
import Home from "./Home";
import League from "./League";
import SportDetails from "./SportDetails";
import Sports from "./Sports";
import Teams from "./Teams";

const AppNavigator = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple4/v4/1d/41/19/1d4119fa-caef-f69d-7cae-6f15d883ef01/source/256x256bb.png"
          width="50"
          height="50"
          alt="Sport"
          onClick={() => navigate("/home")}
          style={{ marginLeft: 30 }}
        />

        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to="/home"
                  style={{
                    marginLeft: 1080,
                    fontWeight: "bold",
                    fontFamily: "arial",
                    fontSize: 20,
                  }}
                >
                  SPORTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/league" element={<League />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/sportsDetails" element={<SportDetails />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </>
  );
};

export default AppNavigator;
