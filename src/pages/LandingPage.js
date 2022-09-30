import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../assets/home-img.svg";

import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.home}>
        <div className={classes.text}>
          <h3>
            Imagine if <span className={classes.heading}>Snapchat</span> had
            events
          </h3>
          <h6>
            Easily host and share events with your friends <br /> across any
            social media.
          </h6>
          <div className={classes.button}>
            <Link to="/create">
              <button>🎉 Create my event</button>
            </Link>
          </div>
        </div>
        <div className={classes.imgcontainer}>
          <img src={HomeImg} alt="birthday event landing image" />
        </div>
        <div className={classes.outside}>
          <Link to="/create">
            <button>🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
