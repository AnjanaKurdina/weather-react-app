import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [units, setUnits] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (units === "celsius") {
    return (
      <span className="TemperatureUnits">
        <span className="temp-now">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          {" "}
          °F /{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="TemperatureUnits">
        <span className="temp-now">{Math.round(celsius())}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>{" "}
          / °C
        </span>
      </span>
    );
  }
}
