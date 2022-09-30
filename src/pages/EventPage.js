import React, { useState } from "react";
import CakeImg from "../assets/birthday-cake.png";
import { useLocation } from "react-router-dom";
import classes from "./EventPage.module.css";
import { GoCalendar } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const EventPage = () => {
  const location = useLocation();
  var starttime = location.state.start.replace("T", " ");
  var endtime = location.state.end.replace("T", " ");
  var place = location.state.location.split(",");
  var placeLocation = location.state.location.replace(place[0] + ",", "");

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.photocontainer}>
          <img
            src={CakeImg}
            className={classes.img}
            alt="birthday cake image"
          />
        </div>
        <div className={classes.datacontainer}>
          <h2>{location.state.name || "Elysia birthday party"}</h2>
          Hosted by <span>{location.state.host || "Elysia"}</span>
          <div className={classes.row}>
            <div className={classes.icon}>
              <GoCalendar />
            </div>
            <div className={classes.text}>
              <span>{starttime}</span>
              <br />
              To: <span> {endtime} </span>
            </div>
            <MdArrowForwardIos className={classes.edit} />
          </div>
          <div className={classes.row}>
            <div className={classes.icon}>
              <MdLocationOn />
            </div>
            <div className={classes.text}>
              <span>{place[0]}</span>
              <br />
              <span>{placeLocation}</span>
            </div>
            <MdArrowForwardIos className={classes.edit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
