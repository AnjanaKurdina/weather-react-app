import React, { useState } from "react";
import axios from "axios";

import Forecast from "./Forecast";
import TemperatureUnits from "./TemperatureUnits";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      feels: response.data.main.feels_like,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
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
          <div className="col-3 Weather">
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
          </div>
          <div className="col-1"></div>
          <div className="today col-4">
            <div className="city-chosen">{weatherData.city}</div>
            <div>
              <TemperatureUnits fahrenheit={weatherData.temp} />
            </div>
            <div className="time">
              <FormattedTime time={weatherData.date} />
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-3 todayForecast">
            <div className="date">
              <strong>
                <FormattedDate date={weatherData.date} />
              </strong>
            </div>
            Feels Like: <span>{Math.round(weatherData.feels)}</span> °F
            <br />
            High/Low: <span>{Math.round(weatherData.high)}</span>/
            <span>{Math.round(weatherData.low)}</span> °F
            <div className="clouds">
              <WeatherIcon code={weatherData.icon} size={45} />
            </div>
            Humidity: <span>{Math.round(weatherData.humidity)}</span>%
            <br />
            Wind Speed: <span>{Math.round(weatherData.wind)}</span> mph
          </div>
          <Forecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
