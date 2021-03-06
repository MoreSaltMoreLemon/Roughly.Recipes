import React from "react";
import { GetStarted } from "../components/AuthButtons";
import bg1 from "../images/bg1_compressed.jpg";
import "../css/homePage.css";

const HomePage = props => {
  return (
    <div className="home-page">
      <header className="home-header">
        <img className="splash-image" src={bg1} alt="golden cereal" />
      </header>
      <div className="home-description">
        <ul className="description-points">
          <li className="description-point">
            <h1 className="description-point-title">
              <i className="material-icons button-icon md-dark">donut_small</i>
              <span> </span>Relationships
            </h1>
            <p>
              Ratios are the heart of cooking. Focus on the relationships
              between ingredients rather than on measurements.
            </p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title">
              <i className="material-icons button-icon md-dark">aspect_ratio</i>
              <span> </span>Resize
            </h1>
            <p>Easily resize your recipes for whatever your needs are!</p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title">
              <i className="material-icons button-icon md-dark">share</i>
              <span> </span>Share
            </h1>
            <p>Show off your amazing creations with other users!</p>
          </li>
          <li className="description-point">
            <h1 className="description-point-title">
              <i className="material-icons button-icon md-dark">favorite</i>
              <span> </span>Steal
            </h1>
            <p>Easily incorporate other user's recipes into your own dishes!</p>
          </li>
        </ul>
        <GetStarted className="get-started" />
      </div>
      <footer>
      </footer>
    </div>
  );
};

export default HomePage;
