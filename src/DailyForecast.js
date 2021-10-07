import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemp() {
    return Math.round(props.data.temp.max);
  }

  function minTemp() {
    return Math.round(props.data.temp.min);
  }

  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div>
      {day()}
      <br />
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <br />
      {maxTemp()}°/
      <br />
      {minTemp()}° F
    </div>
  );
}
