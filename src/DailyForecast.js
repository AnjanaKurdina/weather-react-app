import React from "react";

export default function DailyForecast(props) {
  return (
    <div className="col-2">
      {props.day}
      <br />
      {props.weather}
      <br />
      {props.high}°/
      <br />
      {props.low}° F
    </div>
  );
}
