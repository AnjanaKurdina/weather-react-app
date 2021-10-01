import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: "London",
      temp: response.data.main.temp,
      time: "12:30pm",
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
    );
  } else {
    search();
    return "Loading...";
  }
}
