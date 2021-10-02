import React from "react";

import "./Today.css";

export default function Today(props) {
  return (
    <div className="Today col-4">
      <div className="city-chosen">{props.data.city}</div>
      <div>
        <span className="temp-now">{Math.round(props.data.temp)}</span>
        <span className="units"> °F / C</span>
      </div>
      <div className="time">12:30pm</div>
    </div>
  );
}
