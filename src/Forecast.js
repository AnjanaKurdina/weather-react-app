import React, { useState, useEffect } from "react";

import axios from "axios";
import DailyForecast from "./DailyForecast";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h3 className="forecast-title">5 Day Forecast</h3>
        <div className="row daily-forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <DailyForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiKey = "8881b33e91641557db17feae97031d9c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
