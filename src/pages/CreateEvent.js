import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CreateEvent.module.css";

const CreateEvent = () => {
  const name = useRef();
  const host = useRef();
  const start = useRef();
  const end = useRef();
  const location = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    navigate("/event", {
      state: {
        name: name.current.value,
        host: host.current.value,
        start: start.current.value,
        end: end.current.value,
        location: location.current.value,
      },
    });
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>🎉 Create your event</h2>
        <div className={classes.form}>
          <div>
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              className={classes.name}
              name="name"
              ref={name}
            />
          </div>
          <div>
            <label htmlFor="host">Host Name</label>
            <input
              type="text"
              className={classes.host}
              name="host"
              ref={host}
            />
          </div>
          <div>
            <label htmlFor="start">Start time/date</label>
            <input
              type="datetime-local"
              className={classes.start}
              name="start"
              ref={start}
            />
          </div>
          <div>
            <label htmlFor="end">End time/date</label>
            <input
              type="datetime-local"
              className={classes.end}
              name="end"
              ref={end}
            />
          </div>
          <div>
            <label htmlFor="name">Location</label>
            <input
              type="text"
              className={classes.location}
              name="location"
              ref={location}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
