import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    return "hello";
  }
  let lat = props.coord.lon;
  let lon = props.coord.lat;
  let apiKey = "8881b33e91641557db17feae97031d9c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast">
      <h3 className="forecast-title">5 Day Forecast</h3>
      <div className="row daily-forecast">
        <div className="col-2">
          Monday
          <br />
          <WeatherIcon code="01d" size={30} />
          <br />
          80°/
          <br />
          70° F
        </div>
      </div>
    </div>
  );
}
