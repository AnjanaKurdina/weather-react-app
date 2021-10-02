import React, { useState } from "react";
import axios from "axios";
import Today from "./Today";
import TodayForecast from "./TodayForecast";
import Forecast from "./Forecast";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: response.data.main.temp,
      time: "12:30pm",
      feels: response.data.main.feels_like,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `8881b33e91641557db17feae97031d9c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row weather-today">
          <div className="col-3 Search">
            <form onSubmit={handleSubmit}>
              <input
                type="input"
                placeholder="Enter City Name"
                className="enter-search"
                autoFocus
                autoComplete="off"
                onChange={handleCityChange}
              />
              <br />
              <button type="submit" className="btn btn-primary">
                City Search
              </button>
            </form>
            <button type="button" className="btn btn-primary">
              Current Location
            </button>
          </div>
          <div className="col-1"></div>
          <Today data={weatherData} />
          <div className="col-1"></div>
          <TodayForecast data={weatherData} />
          <Forecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
