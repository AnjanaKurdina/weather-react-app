import React from "react";

import "./Today.css";

export default function Today() {
  let weatherData = {
    city: "New York",
    temp: "80",
    time: "12:30pm",
  };
  return (
    <div className="Today col-4">
      <div className="city-chosen">{weatherData.city}</div>
      <div>
        <span className="temp-now">{weatherData.temp}</span>
        <span className="units"> °F / C</span>
      </div>
      <div className="time">{weatherData.time}</div>
    </div>
  );
}
