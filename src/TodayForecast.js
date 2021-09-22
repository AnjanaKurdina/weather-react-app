import React from "react";

import "./TodayForecast.css";

export default function TodayForecast() {
  return (
    <div className="col-3 TodayForecast">
      <div className="date">
        <strong>Friday, Sep 3, 2021</strong>
      </div>
      <br />
      Feels Like: <span>80</span> °F
      <br />
      High/Low: <span i>85</span>/<span>75</span> °F
      <br />
      <span className="clouds">🌤</span>
      <br />
      Humidity: <span>25</span>%
      <br />
      Wind Speed: <span>4</span> mph
    </div>
  );
}
