import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTeamsData } from "./Handlers";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const location = useLocation();
  const leagueTeams = location.state["teams"];

  useEffect(() => {
    getTeamsData(setTeams, leagueTeams.strLeague);
    // eslint-disable-next-line
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div class="container">
        <div>
          <h1 class="topHeading">ALL TEAMS FROM {leagueTeams.strLeague}</h1>
        </div>
        {teams.map((t) => {
          return (
            <>
              <div>
                <h3>{t.strTeam}</h3>
                <img src={`${t.strTeamLogo}`} alt={t.strTeam} />
                <p>{t.strDescriptionEN}</p>
                <div>
                  <button
                    className="btn btn-primary"
                    onClick={() => openInNewTab(`https://${t.strFacebook}`)}
                  >
                    FACEBOOK
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => openInNewTab(`https://${t.strInstagram}`)}
                  >
                    INSTAGRAM
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => openInNewTab(`https://${t.strTwitter}`)}
                  >
                    TWITTER
                  </button>
                </div>
                <hr></hr>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
