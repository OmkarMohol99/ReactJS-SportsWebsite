import React, { useEffect, useState } from "react";
import { getLeagueData } from "./Handlers";
import "./Css/Sport.css";
import { useNavigate } from "react-router-dom";

const League = () => {
  const [league, setLeague] = useState([]);
  //   console.log(league);

  useEffect(() => {
    getLeagueData(setLeague);
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div class="topHeading">
          <h1>ALL LEAGUES AROUND THE WORLD</h1>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>LEAGUE NAME</th>
              <th>ALTERNATE LEAGUE NAME</th>
              <th style={{ marginRight: 20 }}>TEAMS</th>
            </tr>
          </thead>
          <tbody className="table table-dark">
            {league.map((l) => {
              return (
                <>
                  <tr>
                    <td>{l.strLeague}</td>
                    <td>{l.strLeagueAlternate}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate("/teams", {
                            state: {
                              teams: l,
                            },
                          })
                        }
                      >
                        VIEW
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default League;
