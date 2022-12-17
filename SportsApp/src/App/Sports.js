import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Sport.css";
import { getSportsData } from "./Handlers";

const Sports = ({ navigation }) => {
  const [sport, setSports] = useState([]);
  //   console.log(sport);

  useEffect(() => {
    getSportsData(setSports);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div class="topHeading">
          <h1>ALL SPORTS DATA</h1>
        </div>

        <div class="sport">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>NAME</th>
                <th>FORMAT</th>
                <th>THUMBNAIL</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody className="table table-dark">
              {sport.map((s) => {
                return (
                  <>
                    <tr>
                      <td>{s.strSport}</td>
                      <td>{s.strFormat}</td>

                      <td>
                        <img src={`${s.strSportThumb}`} alt={s.strSport} />
                      </td>
                      <td>
                        {/* <NavLink to={`/sportDetails/${s.idSport}`}> */}
                        <button
                          onClick={() =>
                            navigate("/sportsDetails", {
                              state: {
                                details: s,
                              },
                            })
                          }
                          className="btn btn-primary"
                        >
                          VIEW
                        </button>
                        {/* </NavLink> */}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Sports;
