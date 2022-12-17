import axios from "axios";
import * as qs from "qs";

export const getLeagueData = async (setLeague) => {
  try {
    const resp = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php"
    );

    setLeague(resp.data.leagues);
  } catch (error) {
    console.log(error);
  }
};

export const getSportsData = async (setSport) => {
  try {
    const resp = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/all_sports.php"
    );

    setSport(resp.data.sports);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamsData = async (setTeams, leagueName) => {
  try {
    const queryName = qs.stringify({ l: leagueName });
    console.log(
      "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?" +
        queryName
    );
    const resp = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?" +
        queryName
    );
    setTeams(resp.data.teams);
  } catch (error) {
    console.log(error);
  }
};
