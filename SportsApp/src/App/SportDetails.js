import { useLocation } from "react-router-dom";
import "./Css/Sport.css";

const SportDetails = () => {
  const location = useLocation();
  //   console.log(location.state["details"]);
  const sportDetails = location.state["details"];

  return (
    <>
      <div className="container">
        <div>
          <h1 class="topHeading">SPORTS DETAILS</h1>
        </div>
        <div>
          <h3>{sportDetails.strSport}</h3>
        </div>
        <img
          src={`${sportDetails.strSportThumb}`}
          alt={sportDetails.strSport}
        />
        <p>{sportDetails.strSportDescription}</p>
      </div>
    </>
  );
};

export default SportDetails;
