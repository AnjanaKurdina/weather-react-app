import React from "react";

import "./TodayForecast.css";

export default function TodayForecast(props) {
  return (
    <div className="col-3 TodayForecast">
      <div className="date">
        <strong>Friday, Sep 3, 2021</strong>
      </div>
      <br />
      Feels Like: <span>{Math.round(props.data.feels)}</span> °F
      <br />
      High/Low: <span>{Math.round(props.data.high)}</span>/
      <span>{Math.round(props.data.low)}</span> °F
      <br />
      <img
        className="clouds"
        src={props.data.icon}
        alt={props.data.description}
      />
      <br />
      Humidity: <span>{Math.round(props.data.humidity)}</span>%
      <br />
      Wind Speed: <span>{Math.round(props.data.wind)}</span> mph
    </div>
  );
}
